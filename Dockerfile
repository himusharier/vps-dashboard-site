FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

RUN npm install -g serve

EXPOSE 8080
CMD ["serve", "-s", "dist/vps-dashboard-site/browser", "-l", "8080"]