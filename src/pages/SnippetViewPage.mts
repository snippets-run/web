import { defineComponent, html } from '../components';
import { select, dispatch, watch } from '../state.mts';

const template = html`<x-snippet :snippet="snippet"></x-snippet>`;

class SnippetViewPage extends HTMLElement {
  static tag = 'p-snippet';

  readonly snippet = select((s) => s.currentSnippet);

  async onEnter(params) {
    watch(this.snippet, () => this.onChange());
    await dispatch('selectSnippet', params);
  }

  onChange() {
    this.innerHTML = '';
    const [el] = template({ snippet: this.snippet.value });
    this.append(el);
  }
}

defineComponent(SnippetViewPage);
