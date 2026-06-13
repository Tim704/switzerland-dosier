# switzerland-dosier (alpine.timhufnagel.org) — Vite/React SPA → static nginx.
# Stage 1 builds the bundle (base './', SPA), stage 2 serves it on :3005.
FROM node:22 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3005
