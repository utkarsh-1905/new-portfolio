FROM node:18-alpine AS build

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "build/index.js"]
# FROM node:18-alpine

# COPY --from=build /app/build /build

# EXPOSE 3000

# CMD ["node", "build/index.js"]