import { defineComponent, html } from '../components';
import { select, dispatch } from '../state.mts';

const template = html`<x-snippet :snippet="snippet" />`;

class SnippetViewPage extends HTMLElement {
  static tag = 'p-snippet';

  readonly snippet = select((s) => s.currentSnippet);

  async onEnter(params) {
    await dispatch('selectSnippet', params);
  }
}

defineComponent(SnippetViewPage, { template });
