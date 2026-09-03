import { defineComponent } from '../components';
import { listSnippets } from '../services/registry.mts';

function message(text: string) {
  return `<p class="rounded border border-gray-200 bg-gray-50 p-4 text-sm text-gray-600">${escapeHtml(text)}</p>`;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]!);
}

class SnippetListPage extends HTMLElement {
  static tag = 'p-snippetlist';
  async onEnter({ owner }: { owner?: string }) {
    const selectedOwner = owner?.trim();
    this.innerHTML = `
      <section class="max-w-3xl mx-auto py-8">
        <p class="text-sm font-semibold uppercase tracking-widest text-blue-700">Registry browser</p>
        <h2 class="mt-2 text-3xl font-bold">${selectedOwner ? `Snippets by ${escapeHtml(selectedOwner)}` : 'Browse an owner'}</h2>
        <form class="mt-6 flex gap-2" id="owner-form">
          <label class="sr-only" for="owner">Owner</label>
          <input id="owner" name="owner" required value="${escapeHtml(selectedOwner || '')}" placeholder="Owner, for example snippets" class="min-w-0 flex-1 rounded border border-gray-300 px-3 py-2" />
          <button class="rounded bg-blue-700 px-4 py-2 font-semibold text-white">Browse</button>
        </form>
        <div class="mt-8" id="results">${selectedOwner ? message('Loading snippets...') : message('Enter an owner to see its runnable repositories.')}</div>
      </section>`;
    this.querySelector('form')!.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = new FormData(event.currentTarget as HTMLFormElement).get('owner')?.toString().trim();
      if (value) location.hash = `#/s/${encodeURIComponent(value)}`;
    });

    if (!selectedOwner) return;
    const results = this.querySelector('#results')!;
    try {
      const snippets = await listSnippets(selectedOwner);
      results.innerHTML = snippets.length
        ? `<ul class="divide-y rounded border border-gray-200">${snippets
            .map(
              (snippet) => `<li><a class="flex items-center justify-between p-4 hover:bg-blue-50" href="#/s/${encodeURIComponent(snippet.owner)}/${encodeURIComponent(snippet.repo)}"><span class="font-mono font-semibold">${snippet.repo}</span><span class="rounded bg-gray-100 px-2 py-1 text-xs font-semibold uppercase text-gray-600">${snippet.type}</span></a></li>`,
            )
            .join('')}</ul>`
        : message('This owner has no runnable snippet repositories.');
    } catch (error: any) {
      results.innerHTML = message(error.message);
    }
  }
}

defineComponent(SnippetListPage);
