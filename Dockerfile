FROM node:22.23.4 AS build

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY ./.env.production ./.env.production

ENV NODE_ENV=production

RUN npm run build

RUN npm prune --omit=dev --legacy-peer-deps

# Runtime slim: a imagem node:22 completa traz imagemagick, libs -dev, perl,
# python etc. que o site não usa (images.unoptimized, sem sharp em runtime)
FROM node:22.23.4-bookworm-slim AS run

# Aplica as correções de segurança do Debian publicadas depois da imagem base
RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

# O runtime só roda `node`: o npm/yarn/corepack que vêm na imagem do Node trazem
# dependências vulneráveis (tar, glob, minimatch...) e não são usados aqui.
RUN rm -rf /usr/local/lib/node_modules/npm /usr/local/lib/node_modules/corepack \
  /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/corepack \
  /opt/yarn* /usr/local/bin/yarn /usr/local/bin/yarnpkg

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=build /usr/src/app /usr/src/app

EXPOSE 3000

# Equivale a `npm start` (next start), sem depender do npm no runtime
CMD [ "node", "node_modules/next/dist/bin/next", "start" ]
