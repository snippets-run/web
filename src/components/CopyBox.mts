import { defineComponent, html } from '../components';
import { ref } from '../store.mjs';

const template = html`<div class="flex items-center justify-between h-8 px-2 rounded-md border bg-white max-w-full">
  <pre class="w-full overflow-scroll"><code :innerText="snippet"></code></pre>
  <button @click="onCopy()" class="w-6 cursor-pointer flex items-center ml-4">
    <img :src="imageSource" class="w-4 h-4 aspect-square" />
  </button>
</div>`;

const copiedSrc = '/assets/check.svg';
const readySrc = '/assets/copy.svg';

class SnippetBox extends HTMLElement {
  static tag = 'x-copybox';

  snippet = ref('');
  imageSource = ref(readySrc);

  set code(value) {
    this.snippet.value = value;
  }

  onAppend() {
    this.classList.add('max-w-full', 'block');
  }

  onCopy() {
    navigator.clipboard.writeText(String(this.snippet.value));
    this.imageSource.value = copiedSrc;
    setTimeout(() => (this.imageSource.value = readySrc), 3000);
  }
}

defineComponent(SnippetBox, { template });
