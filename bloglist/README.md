# This is "Full Stack Open" exercise 12.20 project root

Apps are set to run in Docker Desktop (tested on Mac with Apple Silicon)



todo-app  
├── todo-frontend           React application  
├── todo-backend            Backend  
├── redis_data              Data Store for Redis DB  
├── mongo/mongo-init.js     DB initialization for MongoDB  
├── nginx.conf              Reverse proxy configuration, default port 8888  
└── docker-compose.yml      Use this to build and run the stack  

To start the stack run

 - docker compose up
 - point browser to localhost:8888

## To develop (inside a container)

if first time

 - cd frontend/backend
   - docker build -f Dockerfile-dev 
   - npm run d:shell
   - complete setup with running npm install inside container 
   - docker rm

Afterwards

- npm run d:up / d:down start and stop dev container
