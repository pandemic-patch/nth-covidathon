FROM node:10

CMD npm install -g yarn

WORKDIR /usr/src/app

ENV PORT 5000

ENV HOST 0.0.0.0

COPY package.json ./

RUN yarn install

COPY . .

CMD yarn run client

