# Stage 1: Build frontend
FROM node:latest as frontend

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install
COPY frontend .

RUN npm run build

# Stage 2: Build backend
FROM node:latest as backend

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install
COPY backend .

# Final stage: Combine frontend and backend
FROM node:latest

WORKDIR /app

COPY --from=frontend /app/frontend/dist ./frontend/dist
COPY --from=backend /app/backend ./

EXPOSE 3000  # Expose backend port

CMD ["npm", "start"]