FROM node:12-alpine

# RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json ./
COPY package-lock.json ./
COPY . /src/app

RUN npm install
# RUN npm run build

EXPOSE 7000

CMD ["npm", "start"]