# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Expose port 80 for the application
EXPOSE 80

# Define the command to run the application
CMD ["npm", "start"]