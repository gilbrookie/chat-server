FROM node:6

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install \
  && apt-get update \
  && apt-get install -y postgresql-9.4 postgresql-client-9.4

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "script/server" ]