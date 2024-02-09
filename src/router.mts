const getReader = (name, index) => (target, parts) => (target[name] = parts[index]);

const createPathReader = (path) => {
  const parts = path.split('/');
  const readers: any[] = [];

  parts.forEach((part, index) => {
    if (part.startsWith('{')) {
      const name = part.slice(1, -1).trim();
      readers.push(getReader(name, index));
    }
    if (part.startsWith(':')) {
      const name = part.slice(1).trim();
      readers.push(getReader(name, index));
    }
  });

  return (input, output = {}) => {
    readers.map((r) => r(output, input.split('/')));
    return output;
  };
};

const createPathMatcher = (path) => {
  const parts = path.split('/');

  const matchers = parts.map((part) => {
    if (part.startsWith('{') || part.startsWith(':')) {
      return '.+?';
    }
    return part;
  });

  const m = new RegExp('^' + matchers.join('\\/') + '$');
  return (s) => m.test(s);
};

export default (routes) => {
  const matchers: any[] = Object.entries(routes).map(([path, component]) => {
    const test = createPathMatcher(path);
    const read = createPathReader(path);

    return { test, read, component };
  });

  return (routeView: HTMLElement) => {
    function onRouteChange(newUrl) {
      const pathname = newUrl.replace('#', '');
      const match = matchers.find((m) => m.test(pathname));

      const previousEl = routeView.firstElementChild as any;
      previousEl?.onLeave?.();
      routeView.innerHTML = '';

      if (!match) {
        routeView.innerHTML = 'Not found';
        return;
      }

      const properties = match.read(pathname);
      const nextEl = document.createElement(match.component);
      Object.assign(nextEl, properties);
      routeView.append(nextEl);
      nextEl.onEnter?.(properties);
    }

    const onHashChange = (event: HashChangeEvent) => onRouteChange(new URL(event.newURL).hash);
    window.addEventListener('hashchange', onHashChange);

    onRouteChange(location.hash || '/');
    return () => window.removeEventListener('hashchange', onHashChange);
  };
};
