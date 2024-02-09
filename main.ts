import createRouter from './src/router.mjs';
import './src/pages/Home.mjs';
import './src/pages/SnippetList.mjs';
import './src/pages/SnippetView.mjs';
import { dispatch } from './src/state.mts';

const route = createRouter({
  '/': 'p-home',
  '/me': 'p-snippetlist',
  '/s/:name': 'p-snippet',
  '/s/:owner/:name': 'p-snippet',
});

window.addEventListener('DOMContentLoaded', () => {
  route(document.querySelector('main')!);
  dispatch('startup')
});
