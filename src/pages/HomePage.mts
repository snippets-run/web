import { defineComponent, html } from '../components.js';
import '../components/SnippetBox.mjs';

const template = html`<div class="container p-8 mx-auto">
  <h1 class="font-bold mb-6 text-2xl">Welcome!</h1>
  <p class="mb-8">
    This is a registry, a CLI and a web interface to store snippets of code you frequently run in your machines
  </p>

  <h2 class="text-xl mb-4">The CLI runners</h2>
  <h3 class="mb-4 font-semibold">With NPM</h3>
  <p class="mb-4">Install a runner from an NPM package:</p>

  <pre class="overflow-auto text-sm mb-4 p-2 rounded text-white bg-gray-700 lg:w-2/3">npm i -g @snippets.run/node</pre>
  <p class="mb-4">Now you should be able to run a snippet:</p>

  <pre class="overflow-auto text-sm mb-4 p-2 rounded text-white bg-gray-700 lg:w-2/3">run hello-node</pre>
  <p class="mb-4">If that fails, make sure the globally installed NPM packages are in your terminal $PATH.</p>

  <h3 class="mb-4 font-semibold">With bash</h3>
  <p class="mb-4">Download the runner script and link it locally.</p>

  <pre class="overflow-auto text-sm mb-4 p-2 rounded text-white bg-gray-700 lg:w-2/3"
  ><code>curl https://raw.githubusercontent.com/snippets-run/runners/main/bash/run.sh > run.sh
chmod +x run.sh
ln -s $PWD/run.sh /usr/bin/run</code>
</pre>

  <p class="mb-4">Now you can just call a snippet:</p>
  <pre class="overflow-auto text-sm mb-4 p-2 rounded text-white bg-gray-700 lg:w-2/3">run hello-bash</pre>

  <blockquote class="mb-4">
    <p>Support for other runners and environments, like Deno or python, is coming soon!</p>
  </blockquote>
</div>`;

class HomePage extends HTMLElement {
  static tag = 'p-home';

  async onEnter() {
    this.querySelector('pre');
  }
}

defineComponent(HomePage, { template });
