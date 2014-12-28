'use strict';

require( 'should' );
require( '../index' );
var sumService = require( './js/services/sumService' );

describe( 'GETMODULE', function() {
    it( 'sumService should be return 1 + 2 = 3', function() {
        var response = sumService( 1, 2 );
        response.should.be.equal( 3 );
    });
});