import type { SnippetDetail, SnippetSummary } from '../types';

const registry = 'https://registry.snippets.run';

async function request<T>(path: string): Promise<T> {
  const response = await fetch(registry + path, { headers: { Accept: 'application/json' } });
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error || 'The registry request failed');
  }
  return response.json();
}

export function listSnippets(owner: string): Promise<SnippetSummary[]> {
  return request(`/api/snippets/${encodeURIComponent(owner)}`);
}

export function getSnippet(owner: string, repo: string): Promise<SnippetDetail> {
  return request(`/api/snippets/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`);
}
