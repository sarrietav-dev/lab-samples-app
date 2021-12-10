FROM node:17-alpine AS deps
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install --frozen-lockfile

FROM node:17-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

FROM node:17-alpine AS runner
WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist/app.js ./app.js

EXPOSE 5000
ENV PORT 5000

CMD ["node", "app.js"]