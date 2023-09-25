FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install mysql --save

COPY index.js .

EXPOSE 3000

CMD ["node", "index.js"]