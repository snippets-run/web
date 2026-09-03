import { listSnippets } from './services/registry.mts';
import { useState } from './store.mts';
import { SnippetSummary } from './types';

const initialState = {
  profileId: '',
  snippets: [] as SnippetSummary[],
  currentSnippet: {} as SnippetSummary | undefined,
};

const { react, select, dispatch, watch, commit } = useState(initialState, (set, get, commit) => {
  return {
    async startup() {
      set('profileId', '');
      commit();
    },

    async loadSnippets(owner) {
      const list = await listSnippets(owner);
      set('snippets', list);
      commit();
    },

    selectSnippet({ owner, name }) {
      const found = get('snippets').find((s) => s.repo === name && s.owner === owner);
      set('currentSnippet', found);
      commit();
    },
  };
});

export { dispatch, select, watch, react, commit };
