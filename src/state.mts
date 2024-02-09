import { listSnippets } from './services/registry.mts';
import { useState } from './store.mts';
import { Snippet } from './types';

const initialState = {
  profileId: '',
  snippets: [] as Snippet[],
  currentSnippet: {} as Snippet | undefined,
};

const { react, select, dispatch, watch, commit } = useState(initialState, (set, get, commit) => {
  return {
    async startup() {
      set('profileId', '');
      await dispatch('loadSnippets');
      set('currentSnippet', get('snippets')[0]);
    },

    async loadSnippets() {
      const list = await listSnippets();
      set('snippets', list);
      commit();
    },

    selectSnippet({ owner, name }) {
      const found = get('snippets').find((s) => s.name === name && s.owner === owner);
      set('currentSnippet', found);
      commit();
    },
  };
});

export { dispatch, select, watch, react, commit };
