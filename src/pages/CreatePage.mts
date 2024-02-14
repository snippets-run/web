import { defineComponent, html } from '../components.js';
import '../components/CopyBox.mjs';

const template = html`<div class="container p-8 mx-auto">
  <div class="my-16 flex flex-col items-center">
    <h1 class="mb-6 text-5xl text-center">Stop repeating yourself!</h1>
    <p class="mb-8 text-center">Create a snippet and run in all your devices.</p>
  </div>
  <div class="flex flex-col items-start space-y-8">
    <p>First, make sure you have Node.js and the runner installed:</p>
    <x-copybox :code="'npm i -g @snippets.run/node'" class="block text-lg mb-8" />
    <p>
      Now, run a snippet that creates a snippet.<br />
      Yes, creating a snippet is also done with... a snippet!
    </p>
    <x-copybox :code="'run create'" class="block text-lg mb-8" />
  </div>
</div>`;

class CreatePage extends HTMLElement {
  static tag = 'p-create';
}

defineComponent(CreatePage, { template });
