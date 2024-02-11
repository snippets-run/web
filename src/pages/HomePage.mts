import { defineComponent, html } from '../components.js';
import '../components/CopyBox.mjs';

const template = html`<div class="container p-8 mx-auto">
  <div class="my-8 md:my-16 flex flex-col items-center">
    <h1 class="mb-6 text-5xl text-center">Stop repeating yourself!</h1>
    <p class="mb-8 text-center">Save your snippts in one place and run them from all your devices.</p>
    <x-copybox :code="'npm i -g @snippets.run/node'" class="block text-lg mb-8" />
    <div class="flex items-center space-x-4">
      <a href="#/create" class="block px-4 py-2 bg-blue-500 border-blue-700 text-white border rounded"
        >Create a snippet</a
      >
      <a href="#/explore" class="block px-4 py-2 bg-white border-blue-700 text-blue-700 border rounded"
        >Explore snippets</a
      >
    </div>
  </div>

  <hr class="border-b my-16 mx-12" />

  <div class="flex flex-col space-y-6 items-start w-full">
    <p class="mb-8">
      <em class="font-mono">snippets.run</em> is a registry, a CLI and a web interface to store snippets you frequently
      run in your computers.<br />
    </p>

    <h2 class="text-xl ">Installation</h2>

    <h3 class=" font-semibold">With NPM</h3>

    <p>Install a runner from an NPM package (only Node.js supported at the moment)</p>

    <x-copybox :code="'npm i -g @snippets.run/node'" />

    <p>Now you can run a snippet:</p>

    <x-copybox :code="'run hello'" />

    <p class=" text-sm pl-4">
      Note: if that fails, make sure the globally installed NPM packages are in your terminal $PATH.
    </p>

    <h3 class=" font-semibold">With bash</h3>

    <p>Download the runner script and link it locally.</p>

    <x-copybox
      :code="'curl https://raw.githubusercontent.com/snippets-run/runners/main/bash/run.sh > run.sh && chmod +x run.sh && ln -s $PWD/run.sh /usr/bin/run'"
    />

    <p>Now you can just call a snippet:</p>

    <x-copybox :code="'run hello'" />
    <blockquote>
      <p>Support for other runners and environments, like Deno or python, is coming soon!</p>
    </blockquote>
  </div>
</div>`;

class HomePage extends HTMLElement {
  static tag = 'p-home';
}

defineComponent(HomePage, { template });
