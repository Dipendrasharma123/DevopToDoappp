# DevOps To-Do Application
📌 Project Overview

This project is a simple and user-friendly To-Do List web application built using Node.js and Express. It allows users to add and delete tasks through a clean and responsive interface.

The main objective of this project is to demonstrate DevOps practices, including version control, continuous integration, continuous deployment, and containerization using modern tools.

🛠️ Tools & Technologies Used

Node.js – Backend runtime environment
Express.js – Web framework for handling server and routes
EJS – Templating engine for UI rendering
CSS – Styling for modern UI
Git & GitHub – Version control and code hosting
Jenkins – CI/CD pipeline automation
Docker – Containerization of application

⚙️ Steps to Run the Project
🔹 1. Clone the Repository
git clone https://github.com/your-username/devops-todo.git
cd devopstodoapp

🔹 2. Install Dependencies
npm install

🔹 3. Run the Application
npm start

🔹 4. Open in Browser
http://localhost:3000

🐳 Run Using Docker
🔹 Build Docker Image
docker build -t devopstodoapp .

🔹 Run Docker Container
docker run -p 3000:3000 devopstodoapp

🔄 CI/CD Workflow Explanation

This project follows an automated CI/CD pipeline using Jenkins:

1. Developer pushes code to GitHub repository
2. GitHub triggers Jenkins via webhook
3. Jenkins pipeline automatically starts
4. Pipeline stages include:
     -Clone latest code from repository
     -Install project dependencies
     -Run test scripts
     -Build Docker image
     -Stop any existing container
     -Deploy a new container with updated code
5. Application is updated automatically without manual intervention