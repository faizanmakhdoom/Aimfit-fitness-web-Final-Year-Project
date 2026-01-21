FROM node:20

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .
COPY .env ./

EXPOSE 3000

CMD ["npm", "start"]






