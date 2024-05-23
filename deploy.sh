docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -aq)
docker system prune
docker pull vivekjag1/portfolio
docker run -d -p 80:80 vivekjag1/portfolio