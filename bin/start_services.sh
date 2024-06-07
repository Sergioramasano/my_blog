#!/bin/bash

# Start the back-end service
echo "Starting the back-end service..."
cd ..
docker-compose -f docker-compose.yml up -d

# Check if the back-end service is running
if [ $? -eq 0 ]; then
  echo "Back-end service started successfully!"
else
  echo "Failed to start the back-end service."
  exit 1
fi

# Start the front-end service
echo "Starting the front-end service..."
docker-compose -f docker-compose.front.yml up --build -d

# Check if the front-end service is running
if [ $? -eq 0 ]; then
  echo "Front-end service started successfully!"
else
  echo "Failed to start the front-end service."
  exit 1
fi

# Display URLs for accessing the services
echo "Both services are up and running."
echo "Backend service is accessible at: http://localhost:9000"
echo "Frontend service is accessible at: http://localhost:5173"