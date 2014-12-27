# Include

> Include local NodeJS modules relative to your root path

## Usage

Add on your `app.js` (or on main file to your app):

```js
require( 'include' );
```

Now, you can call any module with base on root of your application.

If your module is `app/modules/mymodule.js`, but your call is on the file `app/controllers/controller.js`, doesn't matter! Just type this:

```js
var mymodule = include( 'app/modules/mymodule' );
```

Enjoy ;)