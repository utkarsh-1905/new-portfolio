FROM alpine

RUN apk add --update nodejs npm

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "build/index.js"]


