FROM mhart/alpine-node:8

RUN mkdir /app

##Copy server files
COPY server.js /app/
COPY config.js /app/
COPY cms /app/cms



# Copy build files and node_modules
COPY public /app/public
COPY node_modules /app/node_modules

WORKDIR /app

EXPOSE 9000

CMD [ "node", "server" ]
