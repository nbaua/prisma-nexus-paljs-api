# PRISMA NEXUS AND PALJS API PROJECT

PalJs is a set of tools to help us with NodeJS, Prisma, GraphQL and React projects.
Find more info on https://paljs.com/

## For DB Setup

Added `sqlite` as db provider in `schema.prisma` you can change it to your custom db provider

after an update your `schema.prisma` run

```shell
yarn create-migration
yarn migrate-database
```

this commands will save your schema into db

now run

```shell
yarn generate
pal g
yarn dev
```
## Run Application

- build prisma client
- build crud system
- start dev server

[Quick Tutorial](https://github.com/nbaua/prisma-nexus-paljs-api/blob/master/tutorial/tutorial.MD)
