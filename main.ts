import createRouter from './src/router.mjs';
import './src/pages/HomePage.mjs';
import './src/pages/SnippetListPage.mjs';
import './src/pages/SnippetViewPage.mjs';

import { dispatch } from './src/state.mts';

const route = createRouter({
  '/': 'p-snippetlist',
  '/me': 'p-snippetlist',
  '/s/:owner/:name': 'p-snippet',
  '/s/:name': 'p-snippet',
});

window.addEventListener('DOMContentLoaded', () => {
  dispatch('startup');
  route(document.querySelector('main')!);
});
