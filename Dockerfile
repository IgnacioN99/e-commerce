FROM node:20.11-buster-slim as node

RUN apt-get update -qq && apt-get install -y xdg-utils

COPY ./package.json package.json

WORKDIR /app
EXPOSE 5173
CMD ["yarn", "run", "dev", "--host"]