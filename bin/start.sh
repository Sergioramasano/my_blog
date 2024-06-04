#!/bin/bash

# Start the backend server
npm run --prefix /app/backend start &

# Start the frontend server using the local Vite executable
npm run --prefix /app/front dev