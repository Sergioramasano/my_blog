# Dockerfile for Back-end Service

# Use the official Node.js image as the base image
FROM node:16.16-alpine3.15

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 9000

# Run the application
CMD ["/app/bin/start.sh"]