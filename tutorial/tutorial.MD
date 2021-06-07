## Install PalJS

> npm install -g @paljs/cli

## Create PalJS Project
>pal c

Follow the onscreen instructions for creating the new application, answer as under

    √ Please select your start example · apollo-nexus-schema
    √ please enter your project name · prisma-nexus-paljs-api
    √ please enter your project description · prisma-nexus-paljs-api demo application
    √ please enter your project author · 
    √ please enter your project repository · 
    √ please select your package manager · npm
    √ Skip package installation · no


A project directory will be created named as `prisma-nexus-paljs-api`, browse to the same with change directory command.

## Update the schema and database connection

Notice the prisma directory is generated with some pre-defined schema and environment file

Open the `.env` file Delete the default db connection and change to the following.

    DATABASE_URL="mysql://sa:SqlAdmin$123@localhost:3306/jobs-db"

Introspect the database using the above connection, run following command.

> prisma introspect

Update the default generated models in  `schema.prisma` as under.

    generator client {
        provider = "prisma-client-js"
    }

    datasource db {
        provider = "mysql"
        url      = env("DATABASE_URL")
    }

    model Company {
        id       Int        @default(autoincrement()) @id
        name     String?
        Employee Employee[]
    }

    model Employee {
        id           Int     @default(autoincrement()) @id
        companyId    Int
        email        String?
        employeeName String?
        gender       String?

        company Company @relation(fields: [companyId], references: [id])
    }

## Generate Prisma client

Run the following command to generate prisma client.

> prisma generate   

Look for the output similar to shown below:

✔ Generated Prisma Client to .\node_modules\@prisma\client in 68ms

## Generate PalJS powered APIs

Notice the `pal.js` file which is a configuration file for generating the graphql queries and mutation automatically. However this file is now barred from the latest CLI version. 

Rename this file as `pal.json` and update it as under:

    {
        "backend": {
            "generator": "nexus-schema",
            "onDelete": true,
            "graphql": true
        }
    }

## Run the PalJS generator for graphql

Run the following command and notice, almost instantly a new folder named `graphql` is generated with all the queries and mutations for each of the model classes defined in `schema.prisma`

> pal g