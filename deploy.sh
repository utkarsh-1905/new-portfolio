cd new_portfolio
git pull
docker stop portfolio
docker rm portfolio
docker rmi $(docker images -f=reference="portfolio" -q)
docker build . -t portfolio:latest
docker rmi $(docker images -f="dangling=true" -q)
docker run -d -p 3000:3000 --name portfolio portfolio:latest