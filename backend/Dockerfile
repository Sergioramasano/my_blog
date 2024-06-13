# Use the official Node.js image as the base image
FROM node:16.16-alpine3.15

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code from the backend directory
COPY . .

# Expose the port the app runs on
EXPOSE 9000

# Command to run the application, based on NODE_ENV
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run start; else npm run dev; fi"]