global.include = function( modulePath ) {
  return require.main.require( './' + modulePath );
}