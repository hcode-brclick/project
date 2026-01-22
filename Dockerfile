FROM node:22 AS build

WORKDIR /usr/src/app

COPY ./package.json ./

RUN npm install --legacy-peer-deps

COPY . .

COPY ./.env.production ./.env.production

ENV NODE_ENV=production

RUN npm run build

RUN npm prune --omit=dev --legacy-peer-deps

FROM node:22 AS run

WORKDIR /usr/src/app

ENV NODE_ENV=production

COPY --from=build /usr/src/app /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]