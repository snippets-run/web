FROM ghcr.io/cloud-cli/static:latest

COPY --chown=node:node index.html /home/app/dist/index.html
COPY --chown=node:node search/ /home/app/dist/search/
COPY --chown=node:node editor/ /home/app/dist/editor/
COPY --chown=node:node mine/ /home/app/dist/mine/
COPY --chown=node:node assets/ /home/app/dist/assets/
COPY --chown=node:node server.mjs /home/app/server.mjs
ENTRYPOINT ["node"]
CMD ["/home/app/server.mjs"]
