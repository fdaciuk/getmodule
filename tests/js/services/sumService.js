'use strict';

var sum = getmodule( 'tests/js/modules/sum' );

function SumService() {
    return sum.apply( sum, arguments );
}

exports = module.exports = SumService;