FROM node:20

WORKDIR /app
COPY .env ./

COPY package*.json ./
RUN npm install -g npm@11.7.0

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
