# Get Module

> Include local NodeJS modules relative to your root path

[![Build Status](https://travis-ci.org/fdaciuk/getmodule.svg)](https://travis-ci.org/fdaciuk/getmodule)
[![Coverage Status](https://img.shields.io/coveralls/fdaciuk/getmodule.svg)](https://coveralls.io/r/fdaciuk/getmodule?branch=master)

[![NPM](https://nodei.co/npm/getmodule.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/getmodule/)

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