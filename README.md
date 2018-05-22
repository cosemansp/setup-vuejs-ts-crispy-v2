# setup-vuejs-ts-crispy-v2

Vue.js sample app in Typescript some good practices on logging, axias, etc

> THIS IS WORK IN PROGRESS

## Getting started

```bash
# install dependencies
# and bootstraps packages
yarn
```

## Features

* [x] Full Typescript Support
* [x] Formatting with Prettier
* [x] Linting with TSlint and airbnb config
* [x] Unit testing with Jest
* [x] Add vscode-jest
* [x] Add eslint with vuejs & typescript integration
* [x] Add bootstrap
* [x] Build sample app
* [x] Upgrade to @vue/cli 3.0.0-beta.11 & webpack 4.x
* [ ] Add more documentation
* [ ] Add more unit test samples
* [ ] Add nprogress
* [ ] Add vue-meta

## VueJS support for VSCode

Add [Vetur](https://github.com/vuejs/vetur) for syntax-highlighting, emmet, formatting, etc.

More usefull extensions can be found as recommended extensions.

## Linting

Linting checks the following:

* Airbnb style guide (https://github.com/airbnb/javascript)
* And typescript rules
* And disable prettier rules
* And style with stylelint

```bash
npm run lint
```

Using [lint-staged](https://github.com/okonet/lint-staged) we run linters against staged git files and don't let 💩 slip into your code base!

To test wihout commiting any files.

```bash
npx lint-staged
```

## License

MIT

## References

* [Large-scale Vuex application structures](https://medium.com/3yourmind/large-scale-vuex-application-structures-651e44863e2f)
* [complete-vuejs-application-tutorial/structure](https://matthiashager.com/complete-vuejs-application-tutorial/project-structure/)
* [structuring-very-large-applications](https://forum.vuejs.org/t/structuring-very-large-applications/840/3)
* [vue-enterprise-boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate)
* [vuejs-component-style-guide](https://github.com/pablohpsilva/vuejs-component-style-guide/blob/master/README.md)
