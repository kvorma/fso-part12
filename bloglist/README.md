# This is "Full Stack Open" exercise 12.22 project root

Apps are set to run in Docker Desktop (tested on Mac with Apple Silicon)

## Hierarchy

bloglist
├── frontend                React application  
├── backend                 Backend  
├── mongo/mongo-init.js     DB initialization for MongoDB  
├── nginx.conf              Reverse proxy configuration, copied into container image   
├── docker-compose.dev.yml  Brings up/down dev containers  
└── docker-compose.yml      Use this to build and run the stack  

To start the stack run

 - docker compose up
 - point browser to localhost:8000

## To develop (inside a container)

 - docker compose -f docker-compose.dev.yml up
    - starts mongodb and front/back containers running npm run dev
    - if host is a Mac (Apple silicon) Vite may crash not finding right module:
    
    Error: Cannot find module @rollup/rollup-linux-arm64-gnu.

    - running npm install inside container should help (see package.json)

- when starting mongodb the first time it will run setup scripts from mongo_init.d/
- after that the mount bind can be commented out

## To test

backend:

Inside container:

- npm run test : run some unit tests for the backend
- npm run start:test : start backend in test mode (port 3001/blogTest db)

frontend:

From host after backend has been started in test mode

- npm run test:e2e

## Containers

- blogdb - runs mongodb on default port 27017
- blogback - application backend, needs mongodb and listens to port 3000
- blogapp - React app, hosted by nginx which listens port 80 and provides React app files as well as proxy for /api/ calls coming from the browser where React app lives
