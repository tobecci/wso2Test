# FROM node:18-alpine3.14
FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

CMD [ "npm", "run", "start:dev" ]