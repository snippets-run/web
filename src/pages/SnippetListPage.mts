import { defineComponent, html } from '../components';
import { dispatch, select, watch } from '../state.mts';
import '../components/Snippet.mjs';

const template = html`<h2 class="font-bold mb-4 px-2">Snippets</h2>`;
const item = html`<x-snippet :snippet="snippet" class="mb-4 block" />`;

class SnippetListPage extends HTMLElement {
  static tag = 'p-snippetlist';
  list = select((s) => s.snippets);

  private previous: any[] = [];

  onEnter() {
    dispatch('loadSnippets');

    this.list.watch((list) => {
      this.innerHTML = '';
      this.append(template(this)[0]);
      this.previous.forEach((f) => f());
      this.previous = list.map((snippet) => {
        const [el, detach] = item({ snippet });
        this.append(el);
        return detach;
      });
    });
  }
}

defineComponent(SnippetListPage);
