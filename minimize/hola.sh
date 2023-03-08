#!/bin/bash

figlet -c -t sharding

echo -e "\e[35m\ndocker-compose\n\e[0m"
docker-compose up --build -d

echo -e "\e[35m\ndocker-compose exec configs01\n\e[0m"
docker-compose exec configs01 sh -c "mongosh < /scripts/init-configserver.js"

echo -e "\e[35m\ndocker-compose exec shard01-a\n\e[0m"
docker-compose exec shard01-a sh -c "mongosh < /scripts/init-shard01.js"

echo -e "\e[35m\ndocker-compose exec shard02-a\n\e[0m"
docker-compose exec shard02-a sh -c "mongosh < /scripts/init-shard02.js"

echo -e "\e[35m\ndocker-compose exec shard03-a\n\e[0m"
docker-compose exec shard03-a sh -c "mongosh < /scripts/init-shard03.js"

echo -e "\e[35m\ndocker-compose exec mongos01\e[0m"

echo -e "\e[35m\ninit mongos ->\n\e[0m"
docker-compose exec mongos01 sh -c "mongosh < /scripts/init-router.js"

echo -e "\e[35m\nenable and config mongos ->\n\e[0m"
docker-compose exec mongos01 sh -c "mongosh < /scripts/enable-sharding.js"

docker-compose exec mongos01 mongosh --port 27017