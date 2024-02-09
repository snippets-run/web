import { defineComponent, html } from '../components';
import { select, dispatch, watch } from '../state.mts';
// @ts-ignore
import { load, install } from 'http://codemirror.jsfn.run/index.mjs';

const template = html`
  <form @submit="onSubmit($event)">
    <h2 class="font-bold mb-4">Add snippet</h2>
    <div class="border p-2 rounded mb-4">
      <input type="text" />
    </div>
    <div class="border p-2 rounded" id="editor"></div>
    <div class="py-4">
      <button type="submit">Save</button>
    </div>
  </form>
`;

class SnippetViewPage extends HTMLElement {
  static tag = 'p-snippet';

  readonly snippet = select((s) => s.currentSnippet);

  async onEnter(params) {
    await dispatch('selectSnippet', params);
    await load();
  }

  onSubmit(event) {
    event.preventDefault();
  }
}

defineComponent(SnippetViewPage, { template });
