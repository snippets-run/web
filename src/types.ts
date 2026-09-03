export interface SnippetSummary {
  owner: string;
  repo: string;
  type: 'bash' | 'node' | 'python';
}

export interface SnippetDetail extends SnippetSummary {
  entrypoint: string;
  commit: string;
  script: string;
}
