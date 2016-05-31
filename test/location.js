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

describe('#location.getLocation(accessToken, locationId, callback)', function() {
    it('Returns an object containing location informations.', function(done) {
       inodesta.location.getLocation(params.access_token, "123456789", function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#location.getLocationRecentMedia(accessToken, locationId, minId, maxID, callback)', function() {
    it('Returns an object containing location informations.', function(done) {
       inodesta.location.getLocationRecentMedia(params.access_token, "123456789", null, null, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#location.search(accessToken, lat, lng, facebookPlacesId, distance, callback)', function() {
    it('Returns an object containing location by geographic coordinate.', function(done) {
       inodesta.location.search(params.access_token, "123456789", "987654321", null, null, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});