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

### Quick-start (/TL;DR)

Assumes owner of original repo or set up with similar repo structure.

- Install: `yarn install`.
- Develop and release:
  1. Make changes.
  2. Commit.
  3. `yarn version`. (Creates a new release commit and CHANGELOG.)
  4. `git push --follow-tags`. (Starts GH action to publish npm packages.)
  5. `yarn deploy-storybook`. (Deploys SB to GH pages.)
  6. **DONE**

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

After creating a new version, there are two choices:

1. If repo is set up with GH actions and able to publish to npm, simply push the changes, _with tags_:
   ```sh
   git push --follow-tags
   ```
2. If not, follow [Publishing npm package locally](#publishing-npm-package-locally).

#### Publishing npm package locally

_Note: Because GH actions is set up, only `yarn version` is necessary if pushing to a GH repo set up with this action. The action will take care of publishing the package._

That being said, to build and publish a new version of the package locally, run:

```sh
yarn version
yarn publish
```

`yarn version` automatically generates a new changelog in `CHANGELOG.md` based on all commits since last release, and bumps the version of the package in `package.json` and tags the release.

`yarn publish` deploys a new version to the NPM package registry.

#### Deploying Storybook app

_Note: Ensure that Storybook is built before deploying it (i.e. `yarn build-storybook`)!_

To build and deploy the Storybook live documentation app, run:

```sh
yarn build-storybook
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
- `Conf(ig(uration)?)?:`: Changes to project configuration.
- `Test(s|ing)?:`: Changes to test setup, test files, or new tests.
- Any commits not matching one of these patterns will not be categorized.

###### Breaking changes

You can mark any commit as a breaking change by writing "BREAKING CHANGE" anywhere in your commit message.

### Testing

This project tests its functionality with frontend unit tests, using Jest.

To run tests for the project, run:

```sh
yarn test
```

#### Test coverage

Testing the library also produces a test coverage report. To view this report, run the test and open `/coverage/lcov-report/index.html` in your browser.

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

For testing and linting, these packages are used:

- [Jest](https://jestjs.io/).
- [ESLint](https://eslint.org/).

For development, these comfort-packages are used:

- [Prettier](https://prettier.io/).
- [AutoChangelog](https://github.com/CookPete/auto-changelog/).

And for creating a view of the components for development:

- [Storybook](https://storybook.js.org/).

## Author

[Dag Erik Løvgren (dagerikhl)](https://github.com/dagerikhl)
