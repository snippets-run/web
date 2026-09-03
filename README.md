# snippets.run web

The browser interface is a build-free [Lithium](https://li3.dev/) application. Its components, routing,
application state, and Tailwind CSS utility classes are declared in `index.html`.

Serve this directory with any static HTTP server. There is no install or build command:

```bash
npx serve .
```

The browser loads Lithium from `cdn.li3.dev`, Tailwind's browser runtime from jsDelivr, Sodium's Lithium
`code-editor` component for syntax-highlighted editing, and snippets from `registry.snippets.run`. The editor is
available at `#/edit/<owner>/<repository>` and uses only the registry's constrained editor API.
