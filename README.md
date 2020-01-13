## react-github-users-repos-finder

A web app (single page application) created with react.js, redux and material ui using github rest api.

## Demo

[Live Demo](http://github-users-repos-finder.herokuapp.com/)

### Features

- Search and sort github users and repos
- View user repos


### Todos

- search users and repos pagination
- view user repos pagination

### Overview

![github-search-2](https://user-images.githubusercontent.com/16351223/61591912-a7fe1400-abfe-11e9-8762-5e9291f3dc41.png)
![github-search-1](https://user-images.githubusercontent.com/16351223/61591914-a896aa80-abfe-11e9-8b89-3b85f124ebd1.png)
![github-search-3](https://user-images.githubusercontent.com/16351223/61591915-a896aa80-abfe-11e9-968c-070671c2b24c.png)

## Project setup

for local development create an .env.local file outside the src folder and copy the key below:

REACT_APP_GITHUB_CLIENT_ID = 'add your github client id key here'
REACT_APP_GITHUB_CLIENT_SECRET = 'add your github client secret key here'

---

for production create an .env file outside the src folder and copy the key below:

GITHUB_CLIENT_ID = 'add your github client id key here'
GITHUB_CLIENT_SECRET = 'add your github client secret key here'

---

```
npm install
```

### Compiles and hot-reloads for development

```
npm start
```

### Compiles and minifies for production

```
npm run build
```

### Github Rest api

https://developer.github.com/v3/
