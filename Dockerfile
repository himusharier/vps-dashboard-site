# Stage 1: Build Angular app
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable

# Remove default Nginx index.html
RUN rm -rf /usr/share/nginx/html/index.html

# Copy Angular build contents directly to root
COPY --from=build /app/dist/vps-dashboard-site/ /usr/share/nginx/html/

# Expose internal container port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]