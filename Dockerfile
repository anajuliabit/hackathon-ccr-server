FROM node:latest
WORKDIR /usr/src

COPY package*.json ./
COPY prisma ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
