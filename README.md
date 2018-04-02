# setup-vuejs-ts-crispy-v2

Sample setup of VueJS with library & application with some good practices

> THIS IS WORK IN PROGRESS

## Getting started

```bash
# install dependencies
# and bootstraps packages
yarn
```

## Features

Common

* [x] Full Typescript Support
* [x] Formatting with Prettier
* [x] Linting with TSlint and airbnb config
* [x] Unit testing with Jest
* [ ] Add more documentation

Library

* [x] Build & bundle with Rollup (commonjs, es6 and umd)
* [x] Interactive UI component dev & test with Storybook
* [ ] Add more unit test samples
* [ ] Add more usefull and re-usable utilities
* [ ] upgrade Storybook to 3.4 release version

Application

* [ ] Add more unit test samples
* [ ] Add bootstrap
* [ ] Build sample app

## Packages

### myLib-core

Vue.js sample library in Typescript with Jest unit testing and Storybook development environment

### app

Vue.js sample app in Typescript some good practices on logging, axias, etc

## VueJS support for VSCode

Install the following plugins:

* [Vetur](https://github.com/vuejs/vetur) for syntax-highlighting, emmet, formatting, etc.

* [TSLint Vue](https://marketplace.visualstudio.com/items?itemName=prograhammer.tslint-vue) for linting your .vue files.

To enable typeCheck

```json
// .vscode/settings.json
{
  // ...
  "tslint.typeCheck": true
  // ...
}
```

Install the latest typescript on vetur
https://github.com/vuejs/vetur/issues/682

1.  in console go to ~/.vscode/extensions/octref.vetur-0.11.7
2.  run there yarn upgrade typescript@latest
3.  change directory to .\server
4.  run again yarn upgrade typescript@latest

## License

MIT
