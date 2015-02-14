# Get Module

> Include local NodeJS modules relative to your root path

[![NPM version][npm-version-image]][npm-version-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

[![NPM][npm-image]][npm-url]

## Installation

```js
npm i --save getmodule
```

## Usage

Add `getmodule` at the top of your `app.js` (or at the main file to your app):

```js
require( 'getmodule' );
```

Now, you can call any module with base on root path of your application.

If your module is `app/modules/mymodule.js`, but you're calling it on the file `app/controllers/controller.js`, doesn't worry! Just type this:

```js
var mymodule = getmodule( 'app/modules/mymodule' );
```

Enjoy ;)

## License

[MIT License](https://github.com/fdaciuk/getmodule/blob/master/LICENSE)

[npm-version-image]: https://badge.fury.io/js/getmodule.svg?style=flat
[npm-version-url]: https://npmjs.org/package/getmodule
[travis-image]: https://travis-ci.org/fdaciuk/getmodule.svg
[travis-url]: https://travis-ci.org/fdaciuk/getmodule
[coveralls-image]: https://img.shields.io/coveralls/fdaciuk/getmodule.svg?style=flat
[coveralls-url]: https://coveralls.io/r/fdaciuk/getmodule?branch=master
[npm-image]: https://nodei.co/npm/getmodule.png?downloads=true&downloadRank=true&stars=true
[npm-url]: https://nodei.co/npm/getmodule/
[codeclimate-image]: https://codeclimate.com/github/fdaciuk/getmodule/badges/gpa.svg?style=flat
[codeclimate-url]: https://codeclimate.com/github/fdaciuk/getmodule