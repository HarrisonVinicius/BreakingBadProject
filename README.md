# Breaking Bad Details

this is a pwa developed in NuxtJs

## The Development

- the components present in this application were developed by hand. no vuetify, buefy, etc here.
- this application consumes the api: https://www.breakingbadapi.com/.
- the axios module for nuxt was used as a messenger between the front and the api.
- this application uses the vuex store to handle global states and also for api requests (improvements: create a service layer for requests).
- this application consists of a list of characters present in the breaking bad series.
- infinite scroll was developed in the list for pagination. (needs a few fixes!).
- user can search by character name (improvements: debounce search fixes, multiple words input search fixes).
- the store is not modularized as it is a simple project.
- TDD was not used. (improvemens: unit tests, E2E tests).
- Atomic design was used in the development of the components.
- this project was developed in a total of 5 running hours. (unfortunately as long as I could).
- mobile first was not used
- due to lack of development time, this application is not optimized for mobile devices (improvements!).

## Docker Setup

important:
\*Make sure you can run docker

```bash
$ docker-compose up --build -d
```

## Build Setup

make sure you have Node 12 version installed to run the app

and follow the steps below:

```bash
# install dependencies
$ yarn

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
