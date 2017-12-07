# generator-ts-lib-starter

A [Yeoman](http://yeoman.io/) generator to create a base template for TypeScript library project.

## Features

- Pre-defined tsconfig to start with
- Build commonjs module output (```main``` filed in ```package.json```)
- Build ES6 module output (```module``` filed in ```package.json```)
- Build UMD dist output, include development source map version and minify version (```browser``` filed in ```package.json```)

## usage

Install Yeoman

```npm install -g yo```

Install generator-ts-lib-starter

```npm install -g generator-ts-lib-starter```

Create your TypeScript lib project:

```sh
mkdir mylib && cd mylib
yo ts-lib-starter
```

Build your project

```sh
npm run build
```
