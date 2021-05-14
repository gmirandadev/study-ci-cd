FROM node:14
WORKDIR /usr/src/app
COPY . .
EXPOSE 3000
CMD [ "node", "hello-world.js" ]