# Turborepo starter with pnpm

This is an official starter turborepo.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a packages manager. It includes the following packages/apps:

### Applications

-   `server`: a [Express server](https://expressjs.com/) server that runs your web applications
-   `cms`: a [Payload CMS](https://expressjs.com/) application. Will be used as your datalayer, authentication and data API
-   `web`: a [Remix](https://remix.run/) application. Server side render your react application and use the payload local API

### Packages

-   `ui`: a stub React component library shared by both `web` and `cms` applications
-   `eslint-config`: `eslint` configurations (configured with typescript, react and prettier support)
-   `ts-config`: `tsconfig.json`s used throughout the monorepo
-   `tsup-config`: both PayloadCMS and Remix have built-in bundlers. We use this for consistency between the "dev" and "build" commands, to allways output files to the `./apps/cms/build` folder
-   `shared`: shared third party dependencies for you applications (to reduce final bundle size)

### Utilities

-   [TurboRepo](https://turborepo.org/) build system to run application scripts concurrently
-   [TypeScript](https://www.typescriptlang.org/) for static type checking. Since Typescript 4.7, `exports` in `package.json` files are used, which means less configuraiton and less module resolution issues.
-   [ESLint](https://eslint.org/) for code linting
-   [Prettier](https://prettier.io) for code formatting
-   [PNPM](https://pnpm.io/) for managing workspace dependencies
-   [Volta](https://volta.sh/) for pinning node versions, to make sure you always run node commands with the correct version

## Environment

-   Set up your mongoDB connection string variables in the `./apps/server/.env` file. PayloadCMS connects to your database automatically on startup
-   You will automatically have access to the running PayloadCMS instance and authenticated user within your Remix loaders and actions, through the [context](https://remix.run/docs/en/v1/api/conventions#loader-context) parameter. This means that you will be able to use the PayloadCMS [local API](https://payloadcms.com/docs/local-api/overview) in order to query data:

```
export const loader: LoaderFunction = async ({ context }) => {
    const { payload } = context;

    const users = await payload.find({
        collection: 'users',
    });

    return users.docs;
};
```

## Get up and running

### Install

Install packages

```
pnpm install
```

### Build

To build all apps and packages, run the following command (from the project root):

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command (from the project root):

```
pnpm run dev
```
