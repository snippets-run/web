FROM ghcr.io/cloud-cli/node:latest

COPY . .
RUN pnpm install && pnpm build
