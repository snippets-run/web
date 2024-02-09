import { defineComponent, html } from '../components.js';
import { dispatch } from '../state.mjs';

const template = html`<div class="container p-8 mx-auto">
  <h1 class="font-bold pb-6">snippets.run</h1>
  <p class="pb-4">
    A registry, a CLI and a web interface to store snippets of code you frequently run in your machines
  </p>
  <h2 class="pb-4">The CLI runners</h2>
  <h3 class="pb-4">With NPM</h3>
  <p class="pb-4">Install a runner from an NPM package:</p>
  <pre><code class="language-bash">npm i -g @snippets.run/node
</code></pre>
  <p class="pb-4">Now you should be able to run a snippet:</p>
  <pre><code class="language-bash">run hello-node
</code></pre>
  <p class="pb-4">If that fails, make sure the globally installed NPM packages are in your terminal $PATH.</p>
  <h3 class="pb-4">With bash</h3>
  <p class="pb-4">Download the runner script and link it locally.</p>
  <pre><code class="language-bash">curl https://raw.githubusercontent.com/snippets-run/runners/main/bash/run.sh &gt; run.sh
chmod +x run.sh
ln -s $PWD/run.sh /usr/bin/run
</code></pre>
  <p class="pb-4">Now you can just call a snippet:</p>
  <pre><code class="language-bash">run hello-bash
</code></pre>
  <blockquote class="pb-4">
    <p>Support for other runners and environments, like Deno or python, coming soon!</p>
  </blockquote>
</div>`;

class HomePage extends HTMLElement {
  static tag = 'p-home';

  onEnter() {
    dispatch('loadSnippets');
  }
}

defineComponent(HomePage, { template });
