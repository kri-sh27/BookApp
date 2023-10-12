FROM node:latest
EXPOSE 3008

#use latest version of npm
RUN npm i npm@latest -g

COPY package*.json ./

RUN npm install 

WORKDIR /app

COPY . .

CMD ["npm", "start"]