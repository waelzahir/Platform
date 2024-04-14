FROM node:lts
WORKDIR /code
COPY . /code
RUN npm ci
CMD [ "npm", "run", "dev" ]