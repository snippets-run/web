import highlight from 'https://highlight.jsfn.run/index.mjs';
import { readFileSync } from 'node:fs';

const template = readFileSync('./server/render.html', 'utf-8');

export default async function (req, res, next) {
  const url = new URL(req.url, 'http://localhost');
  const { pathname } = url;

  if (pathname === '/sitemap.txt') {
    const domain = req.headers['x-forwarded-for'];
    const proto = req.headers['x-forwarded-proto'];
    const baseUrl = `${proto}://${domain}`;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(baseUrl);
    return;
  }

  if (!pathname.startsWith('/s/')) {
    return next();
  }

  const [_, platform, owner, name] = pathname.slice(1).split('/');
  if (!(platform && owner && name)) {
    return next();
  }

  const snippet = await fetch(`https://registry.snippets.run/s/${platform}/${owner}/${name}`);
  const json = await snippet.json();
  const html = template
    .replace('%title%', owner + '/' + name)
    .replace('%description', json.description || '')
    .replace('%snippet%', highlight(json.script));

  res.end(html);
}
