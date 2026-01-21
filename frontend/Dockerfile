# 1️⃣ Build stage
FROM node:18 as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY .env ./
COPY . .

RUN npm run build

# 2️⃣ Production stage with Nginx
FROM nginx:alpine

# Copy React build output to Nginx html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port
EXPOSE 3000

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
