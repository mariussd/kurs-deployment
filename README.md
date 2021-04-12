# Kurs i deployment, AbaTEDtalks 2021

http://abatedtalks.tech

## Avhengigheter 

- Docker må være installert
- Bruker på DockerHub
    - https://hub.docker.com/
- Logget inn på DockerHub på maskinen
- node
    - https://nodejs.org/en/
- Parcel
    - https://v2.parceljs.org/getting-started/webapp/

## Nyttige lenker
- Docker docs: https://docs.docker.com/get-started/
- Docker hub docs: https://docs.docker.com/docker-hub/
- Parcel docs: https://v2.parceljs.onpm install -D parcel@nextrg/getting-started/webapp/
- How to use the NGINX Docker image: https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/
- DigitalOcean: https://www.digitalocean.com/
- GitHub student developer: https://education.github.com/pack

## Terminalkommandoer

#### Installer Parcel

`npm install -D parcel@next`

#### Først bygger vi nettsiden med Parcel

`parcel build index.html`

#### Så lager vi et Docker image av det og tagger det med en bra tag

`docker build -t <din ønskede docker-tag> .`

#### Så pusher vi imaget til Dockerhub

`docker push <din ønskede docker-tag>`

#### Puller imaget fra Dockerhub på serveren

`docker pull <din ønskede docker-tag>`

#### Kjører opp imaget på serveren på port 80 (HTTP requests)

`docker run -d -p 80:80 <din ønskede docker-tag>`

## Videre utvidelser
- Fikse HTTPS med docker-compose: https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71
