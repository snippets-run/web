import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = process.env.WEB_ROOT || "/home/app/dist";
const indexPath = join(root, "index.html");
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
};

function validPart(value, pattern) {
  return pattern.test(value) && value !== "." && value !== "..";
}

async function loadSnippet(owner, repo) {
  const endpoint = new URL(
    `/api/snippets/${encodeURIComponent(owner)}/${encodeURIComponent(repo)}`,
    "https://registry.snippets.run",
  );
  const response = await fetch(endpoint, {
    headers: { Accept: "application/json" },
    signal: AbortSignal.timeout(5000),
  });
  if (!response.ok) {
    return null;
  }
  const snippet = await response.json();
  if (
    !snippet ||
    snippet.owner !== owner ||
    snippet.repo !== repo ||
    typeof snippet.script !== "string" ||
    typeof snippet.entrypoint !== "string"
  ) {
    return null;
  }
  return snippet;
}

function inlineJSON(value) {
  return JSON.stringify(value).replace(/[<>&\u2028\u2029]/g, (character) => {
    const escapes = {
      "<": "\\u003c",
      ">": "\\u003e",
      "&": "\\u0026",
      "\u2028": "\\u2028",
      "\u2029": "\\u2029",
    };
    return escapes[character];
  });
}

async function snippetPage(owner, repo) {
  const [template, snippet] = await Promise.all([
    readFile(indexPath, "utf8"),
    loadSnippet(owner, repo).catch(() => null),
  ]);
  const html = template.replace("__SNIPPET_STATE__", inlineJSON(snippet));
  return { html, found: Boolean(snippet) };
}

async function listingPage() {
  const [template, response] = await Promise.all([
    readFile(indexPath, "utf8"),
    fetch("https://registry.snippets.run/api/snippets", {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(5000),
    }),
  ]);
  const data = response.ok ? await response.json() : [];
  const snippets = Array.isArray(data)
    ? data.filter(
        (item) =>
          item &&
          typeof item.owner === "string" &&
          typeof item.repo === "string" &&
          validPart(item.owner, /^[A-Za-z0-9_-]+$/) &&
          validPart(item.repo, /^[A-Za-z0-9._-]+$/),
      )
    : [];
  return template.replace("__SNIPPET_STATE__", inlineJSON({ listing: true, snippets }));
}

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://localhost");
    const pathname = decodeURIComponent(url.pathname);
    if (request.method !== "GET" && request.method !== "HEAD") {
      response.writeHead(405, { Allow: "GET, HEAD" }).end();
      return;
    }
    if (url.pathname === "/mine" || url.pathname === "/mine/") {
      response.writeHead(308, { Location: "/editor" }).end();
      return;
    }

    let owner;
    let repo;
    if (pathname === "/") {
      const html = await listingPage().catch(async () => {
        const template = await readFile(indexPath, "utf8");
        return template.replace("__SNIPPET_STATE__", inlineJSON({ listing: true, snippets: [] }));
      });
      response.writeHead(200, {
        "Cache-Control": "no-cache",
        "Content-Type": "text/html; charset=utf-8",
        "Cross-Origin-Embedder-Policy": "credentialless",
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Resource-Policy": "cross-origin",
      });
      response.end(request.method === "HEAD" ? undefined : html);
      return;
    } else if (pathname.startsWith("/s/")) {
      const parts = pathname.slice(3).split("/");
      if (parts.length !== 2 || !validPart(parts[0], /^[A-Za-z0-9_-]+$/) || !validPart(parts[1], /^[A-Za-z0-9._-]+$/)) {
        response.writeHead(404).end();
        return;
      }
      [owner, repo] = parts;
    }

    if (owner && repo) {
      const { html, found } = await snippetPage(owner, repo);
      response.writeHead(found ? 200 : 404, {
        "Cache-Control": "no-cache",
        "Content-Type": "text/html; charset=utf-8",
        "Cross-Origin-Embedder-Policy": "credentialless",
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Resource-Policy": "cross-origin",
      });
      response.end(request.method === "HEAD" ? undefined : html);
      return;
    }

    if (!pathname.startsWith("/editor/") && pathname !== "/editor" && !pathname.startsWith("/assets/")) {
      response.writeHead(404).end();
      return;
    }
    const isEditor = pathname === "/editor" || pathname.startsWith("/editor/");
    const allowedRoot = join(root, isEditor ? "editor" : "assets");
    const relative = pathname === "/editor" ? "editor/index.html" : pathname.slice(1);
    const file = normalize(join(root, relative));
    if (!file.startsWith(`${allowedRoot}/`)) {
      response.writeHead(403).end();
      return;
    }
    const info = await stat(file);
    if (!info.isFile()) {
      response.writeHead(404).end();
      return;
    }
    const content = await readFile(file);
    response.writeHead(200, {
      "Cache-Control": "public, max-age=7200",
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "Cross-Origin-Embedder-Policy": "credentialless",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Resource-Policy": "cross-origin",
    });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response.writeHead(404).end();
  }
}).listen(Number(process.env.PORT || 8080), "0.0.0.0");
