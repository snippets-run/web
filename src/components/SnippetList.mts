import { defineComponent, html } from '../components';
import './PageNavigation.mjs';

const template = html`
  <div class="flex flex-col space-y-6">
    <x-snippet :snippet="snippet"></x-snippet>
  </div>
`;

class SnippetList extends HTMLElement {
  static tag = 'x-snippetlist';
  list = [{ name: 'hello', owner: 'snippets', script: 'echo hello', platform: 'shell' }];
}

defineComponent(SnippetList, { template });
