# The first FROM is now a stage called build-stage

FROM node:24 AS build-stage 

ARG BACKEND_URL

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=$BACKEND_URL
RUN echo "backend url set to: $VITE_BACKEND_URL"
RUN npm ci

RUN npm run build

# This is a new stage, everything before this is gone, except for the files that we want to COPY

FROM nginx:stable-alpine

# COPY the directory dist from the build-stage to /usr/share/nginx/html
# The target location here was found from the Docker hub page

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
