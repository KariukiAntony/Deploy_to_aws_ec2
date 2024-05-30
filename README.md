
# Shortify
This is a simple yet powerful full-stack application developed using the MERN Stack, which consists of MongoDB, Express.js, React, and Node.js. It enables you to bookmark your frequently visited sites and provides statistics such as the number of clicks. Additionally, it incorporates URL shortening functionality, streamlining your browsing experience. With Shortify, you can easily access your most visited sites without the need to memorize them

# AWS EC2 Deployment 
Shorify is completely deployed in AWS EC2 instance. It utilizes GitHub Actions as the CI/CD pipeline and Docker for rapid and efficient deployments. 

## Installation
### Requirements
  - docker
  - docker-compose
  - ensure the following ports are free
  > - 27017, 3000, 8000, 8080, 8081

Install this project by cloning the repository
```shell
  $ git clone https://github.com/KariukiAntony/Deploy_to_aws_ec2.git
  $ cd Deploy_to_aws_ec2
```
    
## Running

To spin up the containers run:
 - **using a windows machine ?**
    ```bash
    $ docker-compose up -d --build
    ``` 

 - **using a linux machine ?**
    ```bash
    $ docker compose up -d --build
    ``` 
navigate to: <a href="http://127.0.0.1:8000">http://127.0.0.1:8000</a>


