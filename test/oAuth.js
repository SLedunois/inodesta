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

describe('#oAuth.getAuthorizeUri()', function () {
    it('Returns a string containing the uri needs to authorize the application.', function () {
        var result = inodesta.oAuth.getAuthorizeUri();
        result.should.eql("https://api.instagram.com/oauth/authorize/?client_id=client_id&redirect_uri=redirect_uri&response_type=code");
    });
});

describe('#oAuth.getAccessToken(code, callback)', function() {
  it('Returns an object containing user access token.', function(done) {
    inodesta.oAuth.getAccessToken(params.user_code, function(result) {
      result.should.be.type('object').have.property('code', params.returned_status_code);
      done();
    });
  });
});