import { Snippet } from '../types';

export async function listSnippets(): Promise<Snippet[]> {
  const r = await fetch('https://registry.snippets.run/search')
  return r.ok ? r.json() : [];
}