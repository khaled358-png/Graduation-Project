# Random Cat App

## Project Overview
This project is part of the **DevOps Graduation Project**.  
It is a simple web service that displays a **random cat image** on a web page.  
The main focus of this project is **DevOps practices**, including containerization, CI/CD, and infrastructure automation, rather than the complexity of the application itself.

## Features
- Displays a random cat image from a free API.
- Simple Node.js application using Express and Axios.
- Fully containerized using Docker.
- Ready for CI/CD automation with GitHub Actions.

###########################################


## Getting Started

### Prerequisites
- Docker installed on your system.

### Run the App
1. Build the Docker image:
```bash
docker build -t random-cat-app .

docker run -p 3000:3000 random-cat-app

http://localhost:3000

