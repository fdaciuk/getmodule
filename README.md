# Get Module

> Include local NodeJS modules relative to your root path

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[![NPM][npm-image]][npm-url]

## Installation

```js
npm i --save getmodule
```

## Usage

Add on your `app.js` (or on main file to your app):

```js
require( 'getmodule' );
```

Now, you can call any module with base on root of your application.

If your module is `app/modules/mymodule.js`, but your call is on the file `app/controllers/controller.js`, doesn't matter! Just type this:

```js
var mymodule = getmodule( 'app/modules/mymodule' );
```

Enjoy ;)

## License

[MIT License](https://github.com/fdaciuk/getmodule/blob/master/LICENSE)

[travis-image]: https://travis-ci.org/fdaciuk/getmodule.svg
[travis-url]: https://travis-ci.org/fdaciuk/getmodule
[coveralls-image]: https://img.shields.io/coveralls/fdaciuk/getmodule.svg
[coveralls-url]: https://coveralls.io/r/fdaciuk/getmodule?branch=master 
[npm-image]: https://nodei.co/npm/getmodule.png?downloads=true&downloadRank=true&stars=true
[npm-url]: https://nodei.co/npm/getmodule/