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

describe('#relationship.getUserSelFollow(accessToken, callback)', function() {
    it('Returns a list of users followed by the access token owner.', function(done) {
       inodesta.relationship.getUserSelFollow(params.access_token, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#relationship.getUserSelFollowedBy(accessToken, callback)', function() {
    it('Returns the list of users this user is followed by.', function(done) {
       inodesta.relationship.getUserSelFollowedBy(params.access_token, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#relationship.getUserSelRequestedBy(accessToken, callback)', function() {
    it("Returns the List of users who have requested this user's permission to follow.", function(done) {
       inodesta.relationship.getUserSelRequestedBy(params.access_token, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});