# does-exist
> Promising module to test for existence of a file/directory adherent to best-practices defined within nodejs.org documentation.

![100% test coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)

*Assumes Node 6+*

Simple featureless convenience utility to asynchronously determine if a file or directory exists at the provided path.
Follows the implementation suggested in the [Node.js FileSystem](https://nodejs.org/api/fs.html#fs_fs_access_path_mode_callback) documentation, with the result returned via a Promise.

## Usage

From Node:

```js
const doesExist = require('does-exist');

doesExist(pathToFileOrDir)
  // if pathToFileOrDir exists, promise resolves to true (otherwise false)
  .then(result => console.log(result))
  // if a non-ENOENT error is thrown, the promise is rejected passing the thrown error
  .catch(console.error.bind(console));
```

From command line:

```sh
$ exists path-to-file
```

## Installation

Install via npm:

```sh
$ npm i does-exist
```

## Tests and Coverage

Both can be run via npm scripts:

```sh
$ npm test
$ npm run coverage
```
