# Primors

[![npm](https://img.shields.io/npm/v/primors.svg?maxAge=2592000)](https://www.npmjs.com/package/primors)
[![downloads](https://img.shields.io/npm/dt/primors.svg?maxAge=2592000)](https://www.npmjs.com/package/primors)

Package library for common React functionalities.

## Live documentation

Storybook docs deployed on GH Pages: [https://dagerikhl.github.io/primors](https://dagerikhl.github.io/primors)

## CI/CD

This project is set up with GitHub actions to trigger these actions on push to main with a new version tag.

Note: Every new version should be created using `yarn version`, see [Release a new version](#release-a-new-version).

Actions:

- `release`: Triggers on push to the main branch with a new version tag.
  1. Creates a new GitHub release with release notes taken from `CHANGELOG.md` for the current version.
- `publish-package-and-deploy-docs`: Triggers on each new release.
  1. Builds and publishes the library to the npm package registry.
  2. Builds and deploys the Storybook live documentation app to GH Pages.

To run these processes manually, please see [Release](#release) below.

## Development

### Getting started

To install all dependencies, run:

```sh
yarn install
```

### Local development

To build the functionalities locally, run:

```sh
yarn build
```

To run the Storybook app locally, which listens for changes and hotreloads, run:

```sh
yarn storybook
```

You can also build a production build of the Storybook app locally by running:

```sh
yarn build-storybook
```

### Release

#### Release a new version

To create a new version ready for publish and deploy, run:

```sh
yarn version
```

#### Publishing npm package

To build and publish a new version of the package, run:

```sh
yarn version
yarn publish
```

`yarn version` automatically generates a new changelog in `CHANGELOG.md` based on all commits since last release, and bumps the version of the package in `package.json` and tags the release.

`yarn publish` deploys a new version to the NPM package registry.

#### Deploying Storybook app

To build and deploy the Storybook live documentation app, run:

```sh
yarn deploy-storybook
```

##### Commit format

This project uses auto-changelog to automatically generate a changelog. You can use several prefixes matching the regex specified here in your commit messages to categorize commits in your changelog:

- `Feat(ure)?:`: New features, _for the library_. Changes to the Storybook app should be categorized under "Performance".
- `Fix:`: Bug fixes, _for the library_.
- `Impr?(ovement)?:`: General improvements, _for the library_.
- `Perf(ormance)?:`: Performance improvements.
- `Doc(umentation|s)?:`: Changes to documentation, e.g. `README.md` or the Storybook app.
- `Build:`: Changes to the build or deploy environments.
- `Conf(ig)?(uration)?:`: Changes to project configuration.
- Any commits not matching one of these patterns will not be categorized.

###### Breaking changes

You can mark any commit as a breaking change by writing "BREAKING CHANGE" anywhere in your commit message.

### Linting

To lint the project, I suggest installing the ESLint plugin in your editor, but to run it from terminal, run:

```sh
yarn lint
```

## Technology

This library is built using:

- [TypeScript](https://www.typescriptlang.org/).
- [React](https://reactjs.org/).
- [Styled Components](https://styled-components.com/).

For development, these comfort-packages are used:

- [ESLint](https://eslint.org/).
- [Prettier](https://prettier.io/).
- [AutoChangelog](https://github.com/CookPete/auto-changelog/).

And for creating a view of the components for development:

- [Storybook](https://storybook.js.org/).

## Author

[Dag Erik Løvgren (dagerikhl)](https://github.com/dagerikhl)
