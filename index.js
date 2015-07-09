global.getmodule = function getmodule( modulePath ) {
  var path = require( 'path' );
  return require( path.resolve( modulePath ) );
};