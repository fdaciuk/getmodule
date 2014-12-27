global.getmodule = function( modulePath ) {
  return require.main.require( './' + modulePath );
}