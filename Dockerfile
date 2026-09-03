FROM ghcr.io/cloud-cli/static:latest

COPY --chown=node:node index.html /home/app/dist/index.html
COPY --chown=node:node assets/ /home/app/dist/assets/
