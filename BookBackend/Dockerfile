FROM node:latest
EXPOSE 3000

#use latest version of npm
RUN npm i npm@latest -g

COPY package*.json ./

RUN npm install -y wait-for-it

WORKDIR /app

COPY . .

# CMD ["npm", "start"]
CMD ["wait-for-it", "mysql_db:3306", "--", "npm", "start"]
