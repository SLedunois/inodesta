/**
 * Created by SLedunois on 01/05/2016.
 */

/**
 * Json Object containing the app params
 * @type {{client_id: string, client_secret: string, redirect_uri: string}}
 */
var params = {
    "client_id": "client_id",
    "client_secret": "client_secret",
    "redirect_uri": "redirect_uri"
};

var should = require('should');
var inodesta = require('../lib/main').inodesta(params);

describe('get the uri needs to authorize the application', function () {
    it('returns a string containing the access token url', function () {
        var result = inodesta.oAuth.getAccessTokenUri();
        result.should.eql("https://api.instagram.com/oauth/authorize/?client_id=client_id&redirect_uri=redirect_uri&response_type=code");
    });
});