FROM mhart/alpine-node:8

RUN mkdir /app

##Copy frontend files
COPY app /app/
COPY package.json /app/
COPY webpack.config.js /app/

##Copy server files
COPY server.js /app/
COPY config.js /app/
COPY cms /app/cms

#Building
WORKDIR /app
RUN npm install
RUN npm run build

# Copy built frontend files
COPY public /app/public

EXPOSE 9000

CMD [ "node", "server" ]
