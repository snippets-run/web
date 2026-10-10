# snippets.run web

The public snippet page is a small [Lithium](https://li3.dev/) view. The server loads snippet data from the
registry and embeds it in the HTML response as JSON for immediate rendering. The existing editor is served at
`/editor`.

Run the built-in server from this directory (Node 20+):

```bash
node server.mjs
```

The server uses Node's built-in HTTP and fetch APIs. `/` displays the featured snippet and `/s/:owner/:repo`
displays a requested public snippet. `/editor` remains the separate authenticated editor. Sign-in is handled by the
registry's OIDC flow; the browser never receives the OIDC client secret.
