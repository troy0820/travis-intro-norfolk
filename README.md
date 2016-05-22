#Travis CI intro Nofolk.js talk tutorial
[![Travis branch](https://img.shields.io/travis/troy0820/travis-intro-norfolk.svg?style=flat)](https://travis-ci.org/troy0820/travis-intro-norfolk)

This is a talk for travis-ci in javascript

##Getting Started

```
git clone https://github.com/troy0820/travis-intro-norfolk
cd travis-intro-norfolk
npm install
npm start
```
##You can run this app in a docker container
```bash
docker build -t intro-to-travis .
docker run -p 3000:3000 -e PORT=3000 intro-to-travis
```

##This repository serves as a test bench for continuous integration and things javascript
