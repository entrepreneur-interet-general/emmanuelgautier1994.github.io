FROM node:8.16.0 as dev

RUN apt-get update && apt-get -y install \
  inotify-tools \
  rsync

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["./startupDev.bash"]




FROM dev as prod

WORKDIR /usr/src/app
RUN npm run-script buildProd

CMD ["python", "-m", "SimpleHTTPServer", "8000"]
