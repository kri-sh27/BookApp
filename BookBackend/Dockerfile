FROM node:14
EXPOSE 3000

#use latest version of npm
RUN npm i npm@latest -g

COPY package*.json ./

RUN npm install --no-optional && npm cache clean --force

WORKDIR /app

COPY . .

CMD ["npm", "start"]