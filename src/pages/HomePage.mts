import { defineComponent, html } from '../components.js';
import { dispatch } from '../state.mjs';

const template = html`<div>
  <h2 class="font-bold">Hello</h2>
</div>`;

class HomePage extends HTMLElement {
  static tag = 'p-home';

  onEnter() {
    dispatch('loadSnippets');
  }
}

defineComponent(HomePage, { template });
