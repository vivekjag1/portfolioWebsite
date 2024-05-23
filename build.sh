git add .
git commit -am "push for prod"
git push
docker build -t portfilio .
docker tag portfilio vivekjag1/portfilio
docker push vivekjag1/portfolio