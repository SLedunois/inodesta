/**
 * Created by SLedunois on 01/05/2016.
 */

/**
 * Json Object containing the app params
 * @type {{client_id: string, client_secret: string, redirect_uri: string}}
 */
var params = require('./params.json');

var should = require('should');
var inodesta = require('../lib/main').inodesta(params);

describe('#tags.getTag(accessToken, tagName, callback)', function() {
    it('Returns an object containing tag informations.', function(done) {
       inodesta.tags.getTag(params.access_token, "MTB", function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#tags.getMediaRecentTags(accessToken, tagName, count, minTagId, maxTagId, callback)', function() {
    it('Returns an object containing the recent media tagged.', function(done) {
       inodesta.tags.getMediaRecentTags(params.access_token, "MTB", null, null, null, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#tags.search(accessToken, query, callback)', function() {
    it('Returns an object containing the query result.', function(done) {
       inodesta.tags.search(params.access_token, "MTB", function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});