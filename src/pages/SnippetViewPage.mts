import { defineComponent } from '../components';
import { getSnippet } from '../services/registry.mts';

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]!);
}

class SnippetViewPage extends HTMLElement {
  static tag = 'p-snippet';

  async onEnter({ owner, name }: { owner: string; name: string }) {
    this.innerHTML = '<p class="py-8 text-sm text-gray-600">Loading snippet...</p>';
    try {
      const snippet = await getSnippet(owner, name);
      const command = `run ${snippet.owner}/${snippet.repo}@${snippet.commit}`;
      this.innerHTML = `
        <article class="max-w-4xl mx-auto py-8">
          <a class="text-sm font-semibold text-blue-700 hover:underline" href="#/s/${encodeURIComponent(snippet.owner)}">All snippets by ${escapeHtml(snippet.owner)}</a>
          <div class="mt-4 flex flex-wrap items-start justify-between gap-4">
            <div><p class="text-sm font-semibold uppercase tracking-widest text-blue-700">${snippet.type}</p><h2 class="mt-1 font-mono text-3xl font-bold">${escapeHtml(snippet.owner)}/${escapeHtml(snippet.repo)}</h2></div>
            <button id="copy" class="rounded border border-gray-300 bg-white px-3 py-2 text-sm font-semibold">Copy command</button>
          </div>
          <dl class="mt-8 grid gap-4 rounded border border-gray-200 bg-gray-50 p-4 text-sm sm:grid-cols-3">
            <div><dt class="font-semibold text-gray-500">Runtime</dt><dd class="mt-1">${escapeHtml(snippet.type)}</dd></div>
            <div><dt class="font-semibold text-gray-500">Entrypoint</dt><dd class="mt-1 font-mono">${escapeHtml(snippet.entrypoint)}</dd></div>
            <div><dt class="font-semibold text-gray-500">Commit</dt><dd class="mt-1 font-mono">${snippet.commit.slice(0, 12)}</dd></div>
          </dl>
          <div class="mt-6 overflow-hidden rounded border border-gray-800 bg-gray-950"><div class="border-b border-gray-800 px-4 py-2 font-mono text-xs text-gray-300">${escapeHtml(snippet.entrypoint)}</div><pre class="overflow-x-auto p-4 text-sm text-gray-100"><code></code></pre></div>
        </article>`;
      this.querySelector('code')!.textContent = snippet.script;
      this.querySelector('#copy')!.addEventListener('click', async () => {
        await navigator.clipboard.writeText(command);
        this.querySelector('#copy')!.textContent = 'Copied';
      });
    } catch (error: any) {
      this.innerHTML = `<p class="rounded border border-red-200 bg-red-50 p-4 text-sm text-red-800">${error.message}</p>`;
    }
  }
}

defineComponent(SnippetViewPage);
