import highlight from "https://highlight.jsfn.run/index.mjs";
import { readFileSync } from "node:fs";

const registry = "https://registry.snippets.run";
const template = readFileSync("./server/render.html", "utf-8");
const platformToLanguage = {
  node: "javascript",
  shell: "bash",
};

async function onSitemap(req, res) {
  const domain = req.headers["x-forwarded-for"];
  const proto = req.headers["x-forwarded-proto"];
  const baseUrl = `${proto}://${domain}`;
  const indexReq = await fetch(`${registry}/index`);
  const index = await indexReq.json();
  const links = index
    .map((s) => `${baseUrl}/s/${s.platform}/${s.owner}/${s.name}`)
    .join("\n");

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(links);
}

async function onSnippetView(res, { platform, owner, name }) {
  const snippet = await fetch(
    `${registry}/snippet/${platform}/${owner}/${name}`
  );
  const json = await snippet.json();
  const html = template
    .replace("%title%", owner + "/" + name)
    .replace("%description", json.description || "")
    .replace(
      "%snippet%",
      await highlight(json.script, { language: platformToLanguage[platform] })
    );

  res.end(html);
}

export default async function (req, res, next) {
  const url = new URL(req.url, "http://localhost");
  const { pathname } = url;

  if (pathname === "/sitemap.txt") {
    return onSitemap(req, res);
  }

  if (!pathname.startsWith("/s/")) {
    return next();
  }

  const [_, platform, owner, name] = pathname.slice(1).split("/");
  if (!(platform && owner && name)) {
    return next();
  }

  onSnippetView(res, { platform, owner, name });
}
