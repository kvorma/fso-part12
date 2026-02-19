# Docker file to develop in it

FROM node:24 

WORKDIR /usr/src/app 

# This requires project root mounted from the host 
CMD [ "npm", "run", "dev", "--", "--host" ]
