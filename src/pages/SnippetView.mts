import { defineComponent, html } from '../components';
import { select, dispatch } from '../state.mts';

const template = html`<x-snippet :snippet="snippet"></x-snippet>`;

class Snippet extends HTMLElement {
  static tag = 'p-snippet';
  snippet = select((s) => s.currentSnippet);

  onEnter(params) {
    console.log('entering snips', params);
    dispatch('selectSnippet', params);
  }

  onLeave() {
    console.log('leaving sno');
  }
}

defineComponent(Snippet, { template });
