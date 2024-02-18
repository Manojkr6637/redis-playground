docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
docker ps
docker exec -it  <id> bash
redis-cli
Datasebase