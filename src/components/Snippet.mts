import { defineComponent, html } from '../components';
import type { SnippetStats, Snippet } from '../types';

const template = html`
  <div class="flex items-center justify-between">
    <div class="flex items-center space-x-2">
      <a
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline px-0 py-0 h-fit"
        .hidden="!snippet?.owner"
        href="/me"
        >$[snippet?.owner]</a
      >
      <span>/</span>
      <a
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline px-0 py-0 h-fit"
        href="/s/me/gobblet"
        >$[snippet?.name]</a
      >
      <div
        class="inline-flex items-center rounded-md border py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground ml-1"
      >
        $[snippet?.platform]
      </div>
    </div>
    <div class="flex items-center space-x-2">
      <div class="hidden md:flex items-center">
        <div class="flex items-center h-8 px-2 rounded-l-md border text-sm" .hidden="!snippet?.owner">
          run $[snippet?.owner]/$[snippet?.name]
        </div>
        <div class="flex items-center h-8 px-2 rounded-l-md border text-sm" .hidden="snippet?.owner">
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
        $[(stats?.runs||0) + ' runs']
      </div>
    </div>
  </div>

  <div class="editor text-xs font-mono rounded-md overflow-hidden border mt-4">
    <pre aria-hidden="true" class="p-2">$[snippet?.script]</pre>
  </div>
`;

class SnippetView extends HTMLElement {
  static tag = 'x-snippet';
  snippet: Snippet | null = null;
  stats: SnippetStats | null = null;

  onCopy() {
    const command = this.snippet?.owner
      ? `run ${this.snippet?.owner}/${this.snippet?.name}`
      : `run ${this.snippet?.name}`;

    navigator.clipboard.writeText(command);
  }
}

defineComponent(SnippetView, { template });
