FROM node:14.3.0-alpine3.11 as base
WORKDIR /var/www
COPY package*.json tsconfig*.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "run", "start"]

