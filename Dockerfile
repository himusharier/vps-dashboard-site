FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable
RUN rm -rf /usr/share/nginx/html/index.html
COPY --from=build /app/dist/vps-dashboard-site /usr/share/nginx/html
EXPOSE 80