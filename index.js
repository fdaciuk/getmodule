global.getmodule = function( modulePath ) {
  var path = require( 'path' );
  return require( path.resolve( modulePath ) );
}