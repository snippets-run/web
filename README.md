# Snippets.run

A registry, a CLI and a web interface to store snippets of code you frequently run in your machines

## The CLI runners

### With NPM

Install a runner from an NPM package:

```bash
npm i -g @snippets.run/node
```

Now you should be able to run a snippet:

```bash
run hello-node
```

If that fails, make sure the globally installed NPM packages are in your terminal $PATH.

### With bash

Download the runner script and link it locally.

```bash
curl https://raw.githubusercontent.com/snippets-run/runners/main/bash/run.sh > run.sh
chmod +x run.sh
ln -s $PWD/run.sh /usr/bin/run
```

Now you can just call a snippet:

```bash
run hello-bash
```

> Support for other runners and environments, like Deno or python, coming soon!
