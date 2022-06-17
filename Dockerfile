# node version is 10 lts
FROM node:10.24.1-buster

WORKDIR /usr/src/app/my-app
COPY package*.json ./

RUN yarn install
EXPOSE 3000

CMD ["yarn", "run", "dev-server"]

# ENV PATH ="./node_modules/.bin/:$PATH"
