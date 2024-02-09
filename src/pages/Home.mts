import { defineComponent, html } from '../components.js';

const template = html`<div>
  <h2 class="font-bold">Hello</h2>
</div>`;

class HomePage extends HTMLElement {
  static tag = 'p-home';
}

defineComponent(HomePage, { template });
