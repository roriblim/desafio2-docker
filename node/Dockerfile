FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install mysql --save

COPY index.js .

ENV WAIT_VERSION 2.7.2
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/$WAIT_VERSION/wait /wait
RUN chmod +x /wait

EXPOSE 3000

CMD ["node", "index.js"]