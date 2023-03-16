FROM node:alpine as base

WORKDIR /home/node/app

COPY package*.json ./
COPY . .

RUN npm install --quiet

EXPOSE 4000

CMD npm run dev

FROM base as production

ENV NODE_PATH=./build

CMD npm run build