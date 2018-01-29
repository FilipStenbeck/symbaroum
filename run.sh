#!/bin/bash
docker run -p 9000:9000 --label traefik.docker.network=traefik --name=symbaroum -d filipstenbeck/symbaroum
