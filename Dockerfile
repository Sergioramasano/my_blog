# Use the official Node.js image.
FROM node:20.14.0

# Set the working directory for the frontend
FROM node:20.14.0 AS front

WORKDIR /app/front

COPY front/package*.json ./
RUN rm -rf package-lock.json node_modules && npm install && npm i vite@5.2.12
COPY front ./

RUN npm run build

# Build the frontend
RUN npm run build

# Set the working directory for the backend
WORKDIR /app/backend

# Copy and install backend dependencies
COPY backend/package*.json ./
RUN rm -rf node_modules && npm install

# Copy the backend code
COPY backend ./

# Set the working directory for the final setup
WORKDIR /app

# Copy the start script
COPY bin/start.sh /app/bin/start.sh

# Expose the ports for the frontend and backend
EXPOSE 3000
EXPOSE 5173

# Start both frontend and backend
CMD ["/app/bin/start.sh"]