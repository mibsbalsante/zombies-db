# Zombies Database - Survivor's List

You can see it live [here](https://zombies-db-mibsbalsante.vercel.app/)

## Prerequisites

Before you can install and run this project, you need to have the following software installed on your computer:

- Node.js (version 16 or above)
- Yarn (version 3.4.1 is inside the project)

## Installation

1. Open a terminal window and navigate to the root directory of the project.
2. Run the following command to install the project dependencies:

```
yarn
```

## Running the Project

1. Once the installation is complete, you can start the development server by running the following command:

```
yarn dev
```

This will start a development server on your local machine and open your web browser to the [default URL](http://127.0.0.1:9000/). You can make changes to the code and the browser will automatically refresh to reflect the changes.

2. If you want to build the project for production, run the following command:

```
yarn build
```

This will create a production-ready build of your application in the `dist` directory.

## Linting

To run the linter, which checks for coding errors and style issues, run the following command:

```
yarn lint
```

## Testing

To run the test suite, run the following command:

```
yarn test
```

This will run the tests using Jest under Vitest and React Testing Library.

## Committing Changes

To commit changes to the project using the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) standard, run the following command:

```
yarn cz
```

## Previewing Production Build

To preview the production build locally, run the following command:

```
yarn preview
```

## License

This project is licensed under the [GNU License](./LICENSE).
