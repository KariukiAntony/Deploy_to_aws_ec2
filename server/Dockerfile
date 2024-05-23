FROM node:18-alpine

RUN mkdir -p /app


WORKDIR /app

COPY  package*.json .


RUN npm install 

ENV NODE_ENV=production


COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
