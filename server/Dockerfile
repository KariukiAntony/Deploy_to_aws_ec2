FROM node:18-alpine

RUN mkdir -p /usr/src/app

# change ownership and permission 
RUN chown -R node:node /usr/src/app

WORKDIR /usr/src/app

COPY --chown=node:node package*.json .

USER node 

RUN npm install 

ENV NODE_ENV=production


COPY . .
COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start" ]
