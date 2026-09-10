import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = "/home/app/dist";
const types = { ".css": "text/css", ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png" };

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const relative = pathname === "/" ? "index.html" : pathname.endsWith("/") ? `${pathname.slice(1)}index.html` : pathname.slice(1);
    let file = normalize(join(root, relative));
    if (!file.startsWith(`${root}/`)) return response.writeHead(403).end();
    let info = await stat(file);
    if (info.isDirectory()) {
      file = join(file, "index.html");
      info = await stat(file);
    }
    if (!info.isFile()) return response.writeHead(404).end();
    response.writeHead(200, {
      "Cache-Control": pathname === "/" ? "no-cache" : "public, max-age=7200",
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "Cross-Origin-Embedder-Policy": "credentialless",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Resource-Policy": "cross-origin",
    });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404).end();
  }
}).listen(Number(process.env.PORT || 8080), "0.0.0.0");
