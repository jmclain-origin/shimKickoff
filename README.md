# SHIM kickoff

Feature nearly completed, missing urls for redirects, may want to apply conditional logic for constants values based on deployment env. 

Constants in [file: `/typescript/constants.ts`](./typescript/constants.ts).

Will need to remove `window.alert` left in place of links out of page. Left "TODO" comments at locations.

Footer navigation links were not provided they will need to be added *(top navigation links working)*

See [setup and usage](#usage--setup) for build instructions.

Resources:
- [Adobe XD - Shim Router - Page Design](https://xd.adobe.com/view/71a58c91-d7e1-40b8-a5bf-131d8e57ac58-24f6/screen/2f619123-a712-4f2e-96cf-b220fc9ef18d/)
- [Jira UAA-135](https://asudev.jira.com/browse/UAA-135)

## Env Requirements
- Java 1.8
- Maven 
- Tomcat 8.5

### Usage / Setup

Add Tomcat instance to run configuration, set build artifact.

Init run / first time

```bash 
$ mvn clean && mvn install && mvn package
```

Typescript is bundled to JS with node & webpack. Maven is configured to run node scripts during package phase.

```bash
$ mvn clean && mvn package
```

#### Test Emails

Legacy App v1: **foo@example.com**

New App v2: **gdgdsag@test.asu.edu**

### UI files only

1. the markup file @ [`/src/main/webapp/index.jsp`](./src/main/webapp/index.jsp)
2. styling and functionality @ [`/src/main/webapp/dist`](./src/main/webapp/assets) *folder - contains CSS and JS*
3. additional resources @ [`/src/main/webapp/public`](./src/main/webapp/public) *folder - contains images referenced in web page*


### Screenshots

On page load
![Landing](./Screenshot%201.png)


If end user has an application recorded
![Sign in](./Screenshot%202.png)


If end user has **no** application recorded
![Program selection](./Screenshot%203.png)



