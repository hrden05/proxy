FROM node:12-alpine

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install --production
# RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]