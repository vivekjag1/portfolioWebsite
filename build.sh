git add .
git commit -am "push for prod"
git push
docker build -t portfolio .
docker tag portfolio vivekjag1/portfolio
docker push vivekjag1/portfolio