# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variables for MySQL connection
ENV MYSQL_HOST=localhost
ENV MYSQL_USER=root
ENV MYSQL_PASSWORD=null
ENV MYSQL_DATABASE=propose_fs

# Install MySQL client
RUN apt-get update && apt-get install -y mysql-client

# Expose the port on which your Node.js server will run
EXPOSE 81

# Start the Node.js server
CMD [ "npm", "start" ]