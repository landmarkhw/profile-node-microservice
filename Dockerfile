FROM node:10-alpine
WORKDIR /app

# Copy files to the container
COPY ./ ./

RUN npm install

# Run the app
CMD node server.js
