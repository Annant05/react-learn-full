# node version is 10 lts
FROM node:10.24.1-buster

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# ENV PATH /app/node_modules/.bin:$PATH
COPY . /usr/src/app/

RUN yarn install
EXPOSE 3000

CMD ["yarn", "run", "dev-server"]
