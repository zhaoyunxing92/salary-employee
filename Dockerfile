FROM node:16.13.1-alpine as deps
WORKDIR /app
COPY package.json ./
RUN npm config set registry http://registry.npm.taobao.org
RUN npm install glob rimraf
RUN npm install --only=development

# builder
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# run
FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/dist ./pkg
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 3000
ENV PORT 3000

ENTRYPOINT ["node", "pkg/main"]




