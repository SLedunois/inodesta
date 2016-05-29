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

describe('#user.getSelfUserInfo(accessToken, callback)', function() {
    it('Returns an object containing self user informations', function(done) {
       inodesta.user.getSelfUserInfo(params.access_token, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#user.getUserInfo(accessToken, user_id, callback)', function() {
    it('Returns an object containing user informations', function(done) {
       inodesta.user.getUserInfo(params.access_token, params.user_id, function(result) {
           result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
           done();
       });
    });
});

describe('#user.getSelfRecentMedia(accessToken, count, min_id, max_id, callback)', function() {
    it('Returns an object containing the most recent media published by the owner of the access_token.', function(done) {
        inodesta.user.getSelfRecentMedia(params.access_token, null, null, null, function(result){
            result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
            done();
        });
    })
});

describe('#user.getUserRecentMedia(userId, accessToken, count, minId, maxId, callback)', function() {
  it('Returns an object containing the most recent media published by the provided user id.', function(done) {
    inodesta.user.getUserRecentMedia(params.user_id, params.access_token, null, null, null, function(result) {
      result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
      done();
    });
  });
});

describe('#user.getSeldMediaLiked(accessToken, count, maxLikeId, callback)', function() {
  it('Returns an object containing the list of recent media like by the owner of the accessToken.', function(done) {
    inodesta.user.getSeldMediaLiked(params.access_token, null, null, function(result) {
      result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
      done();  
    })
  });
});

describe('#user.search(accessToken, query, callback)', function() {
  it('Returns an object containing a list of user matching with the query', function(done) {
    inodesta.user.search(params.access_token, 'test', function(result) {
      result.should.be.type('object').have.property('meta').have.property('code', params.returned_status_code);
      done();  
    })
  });
});

