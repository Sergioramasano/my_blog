# my_posts

There is a full-stack web application that allows users to create, read, update, and delete (CRUD) posts. The backend is built with Node.js and Express, while the frontend is powered by Vite and Vue 3.


To build and run the services, use the following commands:

Build and start the Back-end Service:
`docker-compose -f docker-compose.yml up --build -d`

Build and start the Front-end Service:
`docker-compose -f docker-compose.front.yml up --build -d`

Start FE + BE
`cd bin && chmod +x start_services.sh && bash start_services.sh`