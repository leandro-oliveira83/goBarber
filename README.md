<h1 align="center">
    <img alt="Gobarber" src="https://ik.imagekit.io/hwyksvj4iv/gobarber_19xmN2BUU.svg" width="250px" />
</h1>

<p align="center">
  <a href="#page_with_curl-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#books-requirements">Requirements</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-start">Start</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-starting-back-end">Node.js</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-starting-front-end">ReactJS</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ipnone-starting-mobile">React Native</a>
</p>

## :page_with_curl: About
This repository contains an API REST in Node.js, web application in React JS and a mobile app in React Native. All applications developed in Typescript.

**Node.js**: is a REST API that does all the CRUD of the application, data persistence, exception handling and that serves data to both the front-end and the mobile.

**ReactJS**: application web where the user make appointments and manager your profile..

**React Native**: similar the web application, the mobile app have all features the application web beyond create appointments and list your appointments.

## :books: Requirements
- Have [**Git**](https://git-scm.com/) to clone the project.
- Have [**Node.js**](https://nodejs.org/en/) installed.
- Have [**Yarn**](https://yarnpkg.com/) installed.
- Have [**Docker**](https://www.docker.com/) running a container PostgreSQL, Redis and MongoDB.
- Have a mobile device or emulator iOS or Android

## :rocket: Start
``` bash
  # Clone the project:
  $ git clone https://github.com/leandro-oliveira83/goBarber.git

  # Entry on directory:
  $ cd goBarber
```

## :gear: Starting back-end
```bash
  # Entry on directory go-barber-mobile:
  $ cd go-barber-mobile

  # Install all dependencies:
  $ yarn

  # Run migrations:
  $ yarn typeorm migration:run

  # Run application:
  $ yarn dev:server
```

## :computer: Starting front-end
```bash
  # Entry on directory go-barber-web:
  $ cd go-barber-web

  # Install all dependencies:
  $ yarn

  # Run application:
  $ yarn start
```

## :iphone: Starting mobile
```bash
  # Entry on directory go-barber-mobile:
  $ cd go-barber-mobile

  # Install all dependencies:
  $ yarn

  # Run application:
  $ yarn ios ou yarn android 
```
