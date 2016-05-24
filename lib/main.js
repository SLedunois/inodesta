/**
 * Created by SLedunois on 01/05/2016.
 */

/**
 * Inodesta Instagram API lib.
 * @param params jsonObject containings every appplication configuration params.
 * @returns {{params: *, oAuth: {}, media: {}}}
 */
exports.inodesta = function(params){

    var request = require('request');

    var api = {
        params : params,
        oAuth : {},
        media : {},
        user : {}
    };

    /**
     * Returns the uri needs to authorize the application.
     * @returns {string} Access Token uri.
     */
    api.oAuth.getAuthorizeUri = function(){
        return "https://api.instagram.com/oauth/authorize/?client_id="+api.params.client_id+"" +
            "&redirect_uri="+api.params.redirect_uri+"&response_type=code";
    };

    /**
     * Returns the oAuth access token for a user id.
     * @param code user code id.
     */
    api.oAuth.getAccessToken = function(code, callback){
        var req = {
            method: 'POST',
            uri: 'https://api.instagram.com/oauth/access_token',
            form: {
                client_id : params.client_id,
                client_secret : params.client_secret,
                grant_type : "authorization_code",
                redirect_uri : "http://localhost:3000/oAuth",
                code : code
            }
        };

        request(req, function(error, request, body) {
            callback(JSON.parse(body));
        });
    };

    /**
     * Returns informations about the owner of the access token.
     * @param accessToken A valid access token.
     * @param callback
     */
    api.user.getSelfUserInfo = function(accessToken, callback) {
      var req = {
          method : 'GET',
          uri : 'https://api.instagram.com/v1/users/self/?access_token='+accessToken
      }

        request(req, function(error, request, body) {
            callback(JSON.parse(body));
        });
    };

    /**
     * Returns information about a user. This endpoint requires the public_content scope
     * if the user-id is not the owner of the access_token.
     * @param userId User ID.
     * @param accessToken A valid access token.
     * @param callback
     */
    api.user.getUserInfo = function(accessToken, userId, callback) {
        var req = {
            method : 'GET',
            uri : 'https://api.instagram.com/v1/users/'+userId+'/?access_token='+accessToken
        }

        request(req, function(error, request, body) {
            callback(JSON.parse(body));
        });
    }

    /**
     * Returns the most recent media published by the owner of the access_token.
     * By default, returns 10 media. Set as null every optional parameter if not used.
     * @param accessToken A valid access token.
     * @param count [Optional] Count of media to return
     * @param minId	[Optional] Returns media later than this min_id.
     * @param maxId	[Optional] Returns media earlier than this max_id.
     */
    api.user.getSelfRecentMedia = function(accessToken, count, minId, maxId, callback) {
        var uri = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken;
        if(count !== null) uri += '&count='+count;
        if(minId !== null) uri += '&min_id'+minId;
        if(maxId !== null) uri += '&max_id'+maxId
        var req = {
            method : 'GET',
            uri : uri
        }

        request(req, function(error, request, body) {
            callback(JSON.parse(body));
        });
    }

    return api;
};