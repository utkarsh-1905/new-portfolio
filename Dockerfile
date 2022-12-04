FROM alpine

RUN apk add --update nodejs npm

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

ENV VITE_GITHUB_KEY ""
ENV VITE_DEVTO ""

RUN npm run build

EXPOSE 3000

CMD ["node", "build/index.js"]


