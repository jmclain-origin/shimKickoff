# SHIM kickoff

This repo is used to implement Jira task and verbal instructions. Built using same tech as legacy application. Serves a single page with styling and user interactivity. 
Javascript has the outlining made for when an API feature is ready to connect. Development dependencies are removed the final is from the webpack build.

Resources:
- [Adobe XD - Shim Router - Page Design](https://xd.adobe.com/view/71a58c91-d7e1-40b8-a5bf-131d8e57ac58-24f6/screen/2f619123-a712-4f2e-96cf-b220fc9ef18d/)
- [Jira UAA-135](https://asudev.jira.com/browse/UAA-135)

## How to use

OS Requirements.
- Java 1.8
- Maven 
- Tomcat 8.5

### Run it yourself
Project setting should preload with intelliJ. If not, it may require a couple of changes, I'll assume you have the basic knowledge on how to do that.
Simple set up, use Tomcat to serve static files. Before you launch Tomcat you need to generate the `.war` file. Execute command.

```bash
$ mvn clean && mvn install && mvn package
```

### Frontend UI files only

Grab the webpage content only. You'll need to get...
1. the markup file @ [`/src/main/webapp/index.jsp`](./src/main/webapp/index.jsp)
2. styling and functionality @ [`/src/main/webapp/dist`](./src/main/webapp/dist) *whole folder - contains CSS and JS*
3. additional resources @ [`/src/main/webapp/public`](./src/main/webapp/public) *whole folder - contains images referenced in web page*

Note: Keep the sources ing the same root directory and nested file tree, else make edit to the new paths.

## Flow Demo

### Test Emails

foo@example.com <-- V1

gdgdsag@test.asu.edu <-- V2

On page load
![Landing](./Screenshot%201.png)



![Sign in](./Screenshot%202.png)



![Program selection](./Screenshot%203.png)



