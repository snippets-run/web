import { parse, materialize, normalize } from '@homebots/parse-html';
import { dispatch, select } from './state.mjs';
import { isRef, ref } from './store.mjs';

type DetachFn = () => void | undefined;
const noop = () => {};

function createScopeProxy(scope) {
  return new Proxy(scope, {
    get(target, p) {
      const value = target[p];

      if (isRef(value)) {
        return value.value;
      }

      return value;
    },
  });
}

function addEventListener(scope: any, el: HTMLElement, name: string, value: string) {
  const event = name.slice(1);
  const fn = Function('scope', '$event', `with (scope) { return (${value}) }`);
  el.addEventListener(event, (e) => fn(scope, e));
}

function attachDispatcher(scope: any, el: HTMLElement, name: string, value: string) {
  const event = name.slice(1);
  const action = value.trim();

  if (value.includes(':')) {
    const [left, right] = action.split(':');
    const _fn = Function('scope', 'dispatch', `with (scope) { dispatch("${left}", ${right}) }`);
    const fn = () => _fn(scope, dispatch);
    el.addEventListener(event, fn);
  } else {
    el.addEventListener(event, () => dispatch(action as any));
  }
}

function watchExpression(scope: any, expression, apply) {
  try {
    const fn = Function('scope', `with (scope) { return (${expression}) }`);
    const initial = fn(scope);

    if (isRef(initial)) {
      apply(initial.value);
      initial.watch(apply);
      return noop;
    }

    const scopeProxy = createScopeProxy(scope);
    const state = select(() => fn(scopeProxy));
    state.watch((v) => apply(v));
    apply(initial);
    return () => state.detach?.();
  } catch (e) {
    console.log(e);
  }

  return noop;
}

function bindProperty(scope: any, el: HTMLElement, name: string, value: string) {
  const property = name.slice(1);
  const apply = (value) => Promise.resolve(value).then((v) => (el[property] = v));

  return watchExpression(scope, value, apply);
}

function bindClassName(scope: any, el: HTMLElement, name: string, value: string) {
  const className = name.slice(1);
  const apply = (v) => (v ? el.classList.add(className) : el.classList.remove(className));

  return watchExpression(scope, value, apply);
}

function bindAttribute(scope: any, el: HTMLElement, name: string, value: string, detachHandlers: Array<DetachFn>) {
  if (name.startsWith('@')) {
    addEventListener(scope, el, name, value);
    return;
  }

  if (name.startsWith('^')) {
    attachDispatcher(scope, el, name, value);
    return;
  }

  if (name.startsWith(':')) {
    const detach = bindProperty(scope, el, name, value);
    detachHandlers.push(detach);
    return;
  }

  if (name.startsWith('.')) {
    const detach = bindClassName(scope, el, name, value);
    detachHandlers.push(detach);
    return;
  }
}

export type HtmlBindings = [DocumentFragment, DetachFn];
export type TemplateFn = (scope: any) => HtmlBindings;

export const html = (text: string | TemplateStringsArray): TemplateFn => {
  const tree = normalize(parse(text[0] || String(text)));

  return (scope: any): HtmlBindings => {
    const detachHandlers: Array<DetachFn> = [];

    return [
      materialize(tree, (_el, node) => {
        const el = _el as HTMLElement;

        if (node.type === 'text') {
          if (!node.text.includes('$[')) return;

          const text = _el as Text;
          const matcher = /\$\[\s*(.*?)\s*\]/g;
          const template = '`' + node.text.replace(matcher, '${$1}').trim() + '`';
          const fn = watchExpression(scope, template, (v) => (text.textContent = v));

          detachHandlers.push(fn);
        }

        if (node.type !== 'element') {
          return;
        }

        for (const attr of node.attributes) {
          const { name, value } = attr;
          bindAttribute(scope, el, name, value, detachHandlers);
        }
      }),
      () => detachHandlers.forEach((f) => f()),
    ];
  };
};

export const Init = Symbol('@@init');
export const Destroy = Symbol('@@destroy');

export function defineComponent(
  Target: CustomElementConstructor & { tag: string },
  options: { template?: TemplateFn } = {},
) {
  const { template = null } = options;
  const connect = Target.prototype.connectedCallback;
  const disconnect = Target.prototype.disconnectedCallback;

  Target.prototype.connectedCallback = function () {
    if (this.isConnected) {
      if (template) {
        const [el, detach] = template(this);
        this.append(el);
        this.__bindings = ref();
        this.__bindings.detach = detach;
      }
    }

    connect && connect.call(this);
    this.onAppend?.();
  };

  Target.prototype.disconnectedCallback = function () {
    if (this.isConnected) {
      return;
    }

    disconnect && disconnect.call(this);
    this.onRemove?.();

    Object.values(this).forEach((v) => v && isRef(v) && v.detach && v.detach());
  };

  Promise.resolve().then(() => customElements.define(Target.tag, Target));
}

export function defineProps(Target, props) {
  Object.entries(props).forEach(([name]) => {
    const refName = '$' + name;

    function ensureProperty(target) {
      if (target[refName]) return;

      target[refName] = ref(null);
      target[refName].watch((value) => target.onChange?.(name, value));
    }

    Object.defineProperty(Target.prototype, name, {
      get() {
        ensureProperty(this);
        return this[refName];
      },
      set(value) {
        ensureProperty(this);
        this[refName].value = value;
      },
    });
  });
}
