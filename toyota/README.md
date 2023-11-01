**Dockerized Microservices Application**

**Project Description:**
Microservices application built with Docker, Ruby on Rails, MySQL and Angular. It consists of three microservices: user management, device management, and an Nginx service serving the front-end application.

**Requirements:**

**1. Docker:**
   Ensure that you have Docker Engine installed on your system. Official website: [Docker](https://www.docker.com/).

**2. Docker Compose:**
   Docker Compose simplifies the process of managing multi-container Docker applications. Docker Compose: [Docker Compose](https://docs.docker.com/compose/install/).

**3. Ruby on Rails:**
   If you need to modify the back-end code make sure you meet the following requirements, before tryin to run a server locally:
   - Ruby 3.2.1
   - Rails 7.1

**4. Angular:**
   To modify the front-end code make sure you meet the following:
   - Node 20
   - Angular 16

**Build and Run the Docker Containers:**

    > docker compose up --build

**Rebuild service:**
    
    > docker compose build <service_name> 
