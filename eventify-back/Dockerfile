FROM node:current-alpine

ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

# COPY package.json package-lock.json ./

RUN npm install -g nodemon @babel/core @babel/cli @babel/preset-env

COPY . .

RUN npm install


CMD ["npm", "run", "dev-docker"]
