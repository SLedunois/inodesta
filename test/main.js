/**
 * Created by SLedunois on 01/05/2016.
 */

var should = require('should');
var instanode = require('../lib/main').instanode();


describe('test', function() {
    it('returns an empty array', function () {
        var result = instanode.test();
        result.should.eql([]);
    });
});

describe('testBis', function() {
    it('return a Hello word for testBis', function () {
        var result = instanode.testbis();
        result.should.eql('Hello');
    });
});
