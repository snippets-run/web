FROM ghcr.io/cloud-cli/static:latest

COPY --chown=node:node index.html /home/app/dist/index.html
COPY --chown=node:node search/ /home/app/dist/search/
COPY --chown=node:node editor/ /home/app/dist/editor/
COPY --chown=node:node mine/ /home/app/dist/mine/
COPY --chown=node:node assets/ /home/app/dist/assets/
