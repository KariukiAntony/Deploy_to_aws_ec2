# build stage 
FROM node:18-alpine as build 

RUN mkdir -p /usr/app

WORKDIR /usr/app 

COPY package*.json /usr/app

RUN npm install  

COPY . .

RUN npm run build 

# production stage
FROM nginx:1.25-alpine 
COPY --from=build /usr/app/dist /usr/share/nginx/html 
COPY --from=build /usr/app/nginx/nginx.conf /etc/nginx/conf.d
# COPY --from=build /usr/app/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80