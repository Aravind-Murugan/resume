
# Welcome to Aravind-M Web Resume Git Repository...

**Welcome to the Aravind-M Web Resume project!**

## Overview

This is a dynamic and interactive web application designed as a personal resume for Myself. Built with modern web technologies MERN, it provides a seamless experience showcasing skills, projects, and professional background. It serves not just as a resume but as a testament to coding skills and web development capabilities.
______
\
<i><u>Repository</u></i>: Resume \
<i><u>Description</u></i>: This Web Resume Developed using ReactJS for (FrontEnd) and NodeJS for (BackEnd)... with the help of MERN Stack Techonology...

## Technologies Used
- **FrontEnd**: Developed using **ReactJS**. React allows for the creation of a responsive UI, enhancing user experience with reusable components and state management.
- **BackEnd**: Powered by **NodeJS**. Utilizing NodeJS ensures efficient handling of server-side operations and connections, providing a robust API infrastructure.

## Features

- **Responsive Design**: Ensures compatibility across various devices, maintaining accessibility and usability.
- **Interactive Components**: Utilizes React's component system to create engaging and intuitive interfaces.
- **Real-time Data Management**: Employs NodeJS for efficient data processing and handling, ensuring smooth interactions.
- **Seamless Navigation**: Offers easy and intuitive browsing through different sections of the resume.

## Installation

To run this project locally, follow these steps:

1. **Git Command**:
    i. **Clone the repository**:
        ```bash
        git clone https://github.com/Aravind-Murugan/resume.git
        cd resume
    ii. **Git user.name list**:
        ```bash
        git config user.name
    iii. **Git user.email list**:
        ```bash
        git config user.email

2. **Docker Commands**:
    i. **Docker-Deployment**:
        ```bash
        docker compose -f '.\docker-compose.yml' up -d --build mysql_database adminer
    ii. **Docker-inspect-IPAddress (mysql-db-container)**:
        ```bash
        docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mysql-db-container
    iii. **To test the MySQL inside the Docker Container**:
        ```bash
        docker exec -it mysql-db-container mysql -u dbuser -pMySQL-dbUser@01Apr2025

3. **Install dependencies:**
    ```bash
    cd frontend/
    npm install
    #--
    cd backend/
    npm install

4. **Start the server**
    ```bash
    npm start

## License
This project is licensed under the [My-License](LICENSE).