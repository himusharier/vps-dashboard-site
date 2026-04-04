# Stage 1: Build Angular app
FROM node:20-alpine AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy app source and build
COPY . .
# RUN npm run build -- --base-href /
RUN npm run build

# Stage 2: Serve static files using 'serve'
# FROM node:20-alpine
# WORKDIR /app

# Install lightweight server
# RUN npm install -g serve

# Copy build output
COPY --from=build /app/dist/vps-dashboard-site/browser/ ./dist/

# Expose container port
EXPOSE 8080

# Start server
# CMD ["serve", "-s", "dist", "-l", "8080"]