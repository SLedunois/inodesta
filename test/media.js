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

describe('#media.getMedia(accessToken, mediaId, type, callback)', function() {
    it('Returns an object containing the media provides by the media id.', function(done) {
       inodesta.media.getMedia(params.access_token, params.media_id, "image", function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});