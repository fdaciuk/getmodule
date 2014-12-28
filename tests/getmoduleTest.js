'use strict';

require( '../index' );
require( 'should' );

var sumService = require( './js/services/sumService' );

describe( 'GETMODULE', function() {
    it( '"global" should have a "getmodule" property', function() {
        global.should.have.ownProperty( 'getmodule' );
    });

    it( '"global.getmodule" should be type "function"', function() {
        getmodule.should.be.type( 'function' );
    });

    it( 'sumService (that requires "sum" module using "getmodule") should be return 1 + 2 = 3', function() {
        var response = sumService( 1, 2 );
        response.should.be.equal( 3 );
    });
});