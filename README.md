# Get Module

> Include local NodeJS modules relative to your root path

<p align="center">
  <img src="getmodule-logo.png" alt="Get Module" />
</p>

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

Add `getmodule` on top of your `app.js` (or _main file_ of your app):

```js
require( 'getmodule' );
```

Now, you can call any module based on _root path_ of your application.

If your module is on `app/modules/mymodule.js`, but you're calling it on the 
file `app/controllers/controller.js`; in tradicional mode, you needed to do:

```js
var mymodule = require( '../modules/mymodule' );
```

But with `getmodule`, you just need type this:

```js
var mymodule = getmodule( 'app/modules/mymodule' );
```

## Contributing

Check [CONTRIBUTING.md][contributing-url]

## License

[MIT License][license-url] © Fernando Daciuk

[npm-version-image]: https://img.shields.io/npm/v/getmodule.svg?style=flat-square
[npm-version-url]: https://npmjs.org/package/getmodule
[travis-image]: https://img.shields.io/travis/fdaciuk/getmodule.svg?style=flat-square
[travis-url]: https://travis-ci.org/fdaciuk/getmodule
[coveralls-image]: https://img.shields.io/coveralls/fdaciuk/getmodule/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/fdaciuk/getmodule?branch=master
[npm-image]: https://nodei.co/npm/getmodule.png?downloads=true&downloadRank=true&stars=true
[npm-url]: https://nodei.co/npm/getmodule/
[codeclimate-image]: https://img.shields.io/codeclimate/github/fdaciuk/getmodule.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/fdaciuk/getmodule
[contributing-url]: CONTRIBUTING.md
[license-url]: https://github.com/fdaciuk/licenses/blob/master/MIT-LICENSE.md