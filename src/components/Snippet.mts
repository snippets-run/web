import { defineProps, defineComponent, html } from '../components';
import { Ref } from '../store.mts';
import type { Snippet } from '../types';

// @ts-ignore
import { highlight } from 'https://highlight.jsfn.run/index.mjs';

const template = html`
  <div class="flex items-center justify-between bg-gray-100 p-2 rounded-t-md">
    <div class="flex items-center space-x-2">
      <a
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline px-0 py-0 h-fit"
        .hidden="!snippet?.owner"
        href="#/me"
        >$[snippet?.owner]</a
      >
      <span>/</span>
      <a
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline px-0 py-0 h-fit"
        :href="'#/s/' + snippet?.owner + '/' + snippet?.name"
        >$[snippet?.name]</a
      >
      <div class="inline-flex items-center rounded-md border p-1 text-xs font-semibold">$[snippet?.platform]</div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="hidden md:flex items-center shadow rounded-md">
        <div class="flex items-center h-8 px-2 rounded-l-md border text-sm bg-white" .hidden="!snippet?.owner">
          run $[snippet?.owner]/$[snippet?.name]
        </div>
        <div class="flex items-center h-8 px-2 rounded-l-md border text-sm bg-white" .hidden="snippet?.owner">
          run $[snippet?.name]
        </div>
        <button
          @click="onCopy()"
          class="flex items-center justify-center h-8 w-8 rounded-r-md border border-l-0 cursor-pointer"
        >
          <img src="assets/copy.svg" class="w-4 h-4" />
        </button>
      </div>
      <div class="hidden md:flex items-center h-8 px-2 rounded-md border text-xs font-medium">
        $[(snippet?.runs||0) + ' runs']
      </div>
    </div>
  </div>
  <div class="text-xs font-mono rounded-b-md border border-t-0 overflow-hidden p-4 p-2">
    <pre></pre>
  </div>
`;

const platformToLanguage = {
  node: 'javascript',
  shell: 'bash',
};

class SnippetView extends HTMLElement {
  static tag = 'x-snippet';

  snippet: Ref<Snippet | null>;

  onCopy() {
    const s = this.snippet.value;
    const command = s?.owner ? `run ${s?.owner}/${s?.name}` : `run ${s?.name}`;

    navigator.clipboard.writeText(command);
  }

  async onChange() {
    const s = this.snippet.value;
    const lang = platformToLanguage[s?.platform || ''];
    const pre = this.querySelector('pre')!;
    pre.innerHTML = await highlight(s?.script, { lang });
  }
}

defineComponent(SnippetView, { template });
defineProps(SnippetView, {
  snippet: Object,
});
