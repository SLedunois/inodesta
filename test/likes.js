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

describe('#likes.getMedialikes(accessToken, mediaId, callback)', function() {
    it('Returns an object containing the list of users who have liked the media.', function(done) {
       inodesta.likes.getMediaLikes(params.access_token, params.media_id, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#likes.getMedialikes(accessToken, mediaId, callback)', function() {
    it('Returns an object containing the request status.', function(done) {
       inodesta.likes.postMediaLike(params.access_token, params.media_id, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#likes.deleteMedialikes(accessToken, mediaId, callback)', function() {
    it('Returns an object containing the request status.', function(done) {
       inodesta.likes.deleteMediaLike(params.access_token, params.media_id, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});