FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable
RUN mkdir -p /usr/share/nginx/html/vps-dashboard-site
COPY --from=build /app/dist/vps-dashboard-site /usr/share/nginx/html/vps-dashboard-site
EXPOSE 80