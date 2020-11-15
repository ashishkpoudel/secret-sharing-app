FROM node:14.3.0-alpine3.11 as base
WORKDIR /base
COPY package*.json tsconfig*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM base as production
WORKDIR /var/www
COPY package*.json tsconfig*.json ./
RUN npm install --production
COPY --from=base /base/dist ./dist
CMD ["npm", "run", "start"]

FROM base as development
WORKDIR /var/www
COPY --from=base /base ./
CMD ["npm", "run", "start:dev"]
