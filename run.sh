#!/bin/bash
echo "Enter name:"
read name
docker run -p 9000:9000 --label traefik.docker.network=traefik --name=$name -d filipstenbeck/symbaroum
