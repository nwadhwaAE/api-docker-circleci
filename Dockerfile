FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./api-docker-jenkins ./

CMD ["npm", "run", "test"]
