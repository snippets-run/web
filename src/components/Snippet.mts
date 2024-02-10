import { defineProps, defineComponent, html } from '../components';
import { Ref } from '../store.mts';
import type { Snippet } from '../types';

// @ts-ignore
import { highlight } from 'https://highlight.jsfn.run/index.mjs';

const template = html`
  <div class="flex items-center justify-between bg-gray-100 p-2 rounded-t-md border border-gray-300">
    <div class="flex items-center space-x-2">
      <div class="rounded-full border p-1 bg-white">
        <img class="w-4 h-4 aspect-square" :src="'/assets/platform-' + snippet?.platform + '.svg'" :alt="snippet?.platform" />
      </div>
      <a
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium "
        .hidden="!showOwner(snippet?.owner)"
        href="#/me"
        >$[snippet?.owner]</a
      >
      <span .hidden="!showOwner(snippet?.owner)">/</span>
      <a
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium "
        :href="'#/s/' + snippet?.owner + '/' + snippet?.name"
        >$[snippet?.name]</a
      >
    </div>
    <div class="flex items-center space-x-2">
      <div class="flex items-center shadow rounded-md flex-nowrap">
        <div
          class="flex items-center h-8 px-2 rounded-l-md border text-sm bg-white"
          .hidden="!showOwner(snippet?.owner)"
        >
          run $[snippet?.owner]/$[snippet?.name]
        </div>
        <div
          class="flex items-center h-8 px-2 rounded-l-md border text-sm bg-white"
          .hidden="showOwner(snippet?.owner)"
        >
          run $[snippet?.name]
        </div>
        <button
          @click="onCopy()"
          class="flex items-center justify-center h-8 w-8 rounded-r-md border border-l-0 cursor-pointer bg-white"
        >
          <img src="assets/copy.svg" class="w-4 h-4" />
        </button>
      </div>
      <!--
      <div class="hidden md:flex items-center h-8 px-2 rounded-md border text-xs font-medium bg-white" .hidden="!snippet?.runs">
        $[(snippet?.runs||0) + ' runs']
      </div>
      -->
    </div>
  </div>
  <div class="text-xs font-mono rounded-b-md border border-t-0 border-gray-300 overflow-hidden p-4 p-2">
    <p class="mb-2 pb-2 border-b font-semibold text-green-700" .hidden="!snippet?.description" :innerText="'// ' + snippet?.description"></p>
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
    const command = this.showOwner(s?.owner) ? `run ${s?.owner}/${s?.name}` : `run ${s?.name}`;

    navigator.clipboard.writeText(command);
  }

  async onChange() {
    const s = this.snippet.value;
    const language = platformToLanguage[s?.platform || ''];
    const pre = this.querySelector('pre')!;
    pre.innerHTML = await highlight(s?.script, { language });
  }

  showOwner(owner) {
    return Boolean(owner && owner !== 'snippets');
  }
}

defineComponent(SnippetView, { template });
defineProps(SnippetView, {
  snippet: Object,
});
