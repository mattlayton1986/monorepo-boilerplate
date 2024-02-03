# T-NNPP (Turborepo with NextJS, NestJS, Prisma, PostgreSQL) Boilerplate

This project creates a monorepo (using Turborepo) with a NextJS front-end, Nest.js backend, PrismaORM and PostgreSQL database.

Official documentation sites: 

- [NextJS](https://nextjs.org/docs)
- [Nest.js](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/docs)
- [Docker](https://docs.docker.com/)
- [PostgreSQL](https://www.postgresql.org/docs/)

## Installing and initializing the app

1. Fork the repo then clone it to your local device.

2. Install dependencies: `pnpm install` or `npm install` (pnpm is the recommended package manager for this project)

3. Update database settings as needed:  
    a. In `packages/database/docker-compose.yml`, update the environment variables for POSTGRES_USER, POSTGRES_PASSWORD, and POSTGRES_DB.  
    b. In `packages/database/.env` adjust the DATABASE_URL environment variable to match any updates you made in 3a. The database url has the following format: 

    ```
    DATABASE_URL="postgresql:/POSTGRES_USER:POSTGRES_PASSWORD@localhost:5432/POSTGRES_DB"
    ```  

    Alternately, you can configure a different database (SQLite, MySQL, etc.).

4. Start the Postgres container on Docker: `cd packages/database && docker-compose up -d`  
  
    If you prefer not to install and use Docker, you can [configure a local Postgres database](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database).

5. *Generate Prisma schema and types and create initial migration: `turbo db:push`
  
    **Note:** The Prisma schema is initialized with a basic User model in `packages/database/prisma/schema.prisma`. You may wish to update the models before initializing the database. 

    Your terminal may 'hang' when running this command; if this happens, it's waiting for you to enter a name for the migration. 

6. *Seed the database: `turbo db:seed`

    Note: The seed file (`packages/database/src/seed.ts`) seeds the database with two users that follow the default User model. If you changed your model in step 5, you will need to update the seed file to fit your model(s).

7. *Run the application: `turbo dev`
  
    This will initialize any applications that have a `dev` script in it's `package.json` file. Here it should run `app` (the front-end Next.js app) and `api` (the backend Nest.js app). 

\* These commands should be run in the root directory of the monorepo (`/`, the same directory as the `turbo.json` file).
