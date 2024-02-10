FROM node:18-alpine

WORKDIR /cell-graph/

COPY public/ /cell-graph/public
COPY src/ /cell-graph/src
COPY package.json /cell-graph/
COPY package-lock.json /cell-graph/

RUN npm ci

CMD ["npm", "start"]
