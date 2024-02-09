import { defineComponent, html } from '../components';

const template = html` <div class="relative">
  <button @click="onCopy()" class="h-8 w-8 cursor-pointer p-2 z-50">
    <img src="/assets/copy.svg" class="w-4 h-4 aspect-square" />
  </button>
  <pre><slot/></pre>
</div>`;

class SnippetBox extends HTMLElement {
  static tag = 'x-snippetbox';

  set code(value) {
    this.querySelector('pre')!.innerText = value;
  }
}

defineComponent(SnippetBox, { template });
