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

describe('#comments.getMediaComments(accessToken, mediaId, callback)', function() {
    it('Returns an object containing a list of recent comments on a media object.', function(done) {
       inodesta.comments.getMediaComments(params.access_token, params.media_id, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#comments.getMediaComment(accessToken, mediaId, comment, callback)', function() {
    it('Returns an object containing the request status.', function(done) {
       inodesta.comments.postMediaComment(params.access_token, params.media_id, 'This is a comment.', function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#comments.deleteMediaComment(accessToken, mediaId, comment, callback)', function() {
    it('Returns an object containing the request status.', function(done) {
       inodesta.comments.deleteMediaComment(params.access_token, params.media_id, '123456789', function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});