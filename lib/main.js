/**
 * Created by SLedunois on 01/05/2016.
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
     * Get the uri needs to authorize the application.
     * @return {string} Authorization uri.
     */
    api.oAuth.getAuthorizeUri = function(){
        return "https://api.instagram.com/oauth/authorize/?client_id="+api.params.client_id+"" +
            "&redirect_uri="+api.params.redirect_uri+"&response_type=code";
    };

    /**
     * Get the oAuth access token for a user id.
     * @param  {string}   code     user code.
     * @param  {Function} callback 
     * @return {object}            
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
     * Get informations about the owner of the access token.
     * @param  {string}   accessToken A valid access Token
     * @param  {Function} callback    
     * @return {object}               
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
     * Get information about a user. This endpoint requires the public_content scope
     * if the user-id is not the owner of the access_token.
     * @param  {string}   accessToken A valid access token.
     * @param  {string}   userId      userId User ID.
     * @param  {Function} callback    
     * @return {object}               
     */
    api.user.getUserInfo = function(accessToken, userId, callback) {
        var req = {
            method : 'GET',
            uri : 'https://api.instagram.com/v1/users/'+userId+'/?access_token='+accessToken
        }

        request(req, function(error, request, body) {
            callback(JSON.parse(body));
        });
    };

    
    /**
     * Get the most recent media published by the owner of the access_token.
     * By default, returns 10 media. Set as null every optional parameter if not used.
     * @param  {string}   accessToken A valid access token.
     * @param  {string}   count       [Optional] Count of media to return
     * @param  {string}   minId       [Optional] Returns media later than this min_id.
     * @param  {string}   maxId       [Optional] Returns media earlier than this max_id.
     * @param  {Function} callback    
     * @return {object}               
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
    };

    /**
     * Get the most recent media published by a user.
     * @param  {string}   userId      User id.
     * @param  {string}   accessToken A valid access token.
     * @param  {int}      count       [Optional] Count of media to return.
     * @param  {string}   minId       [Optional] Return media later than this min_id.
     * @param  {string}   maxId       [Optional] Return media earlier than this max_id.
     * @param  {Function} callback    
     * @return {object}               Returns the most recent media published by a user.
     */
    api.user.getUserRecentMedia = function(userId, accessToken, count, minId, maxId, callback) {
        var uri= 'https://api.instagram.com/v1/users/'+userId+'/media/recent/?access_token='+accessToken;
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
    };

    /**
     * Get the list of recent media like by the owner of the accessToken.
     * @param  {string}   accessToken A valid access token.
     * @param  {integer}  count       Count of media to return.
     * @param  {string}   maxLikeId   Return media liked before the id.
     * @param  {Function} callback    
     * @return {object}               Returns the list of recent media like by the owner of the accessToken.
     */
    api.user.getSeldMediaLiked = function(accessToken, count, maxLikeId, callback) {
        var uri = 'https://api.instagram.com/v1/users/self/media/liked?access_token='+accessToken;
        if(count !== null) uri += '&count='+count;
        if(maxLikeId !== null) uri += '&max_like_id'+maxLikeId;
        var req = {
            method : 'GET',
            uri : uri
        }

        request(req, function(error, request, body) {
            callback(JSON.parse(body));
        });
    };

    /**
     * Get a list of users matching the query.
     * @param  {string}   accessToken A valid access token.
     * @param  {string}   query       A query string.
     * @param  {Function} callback    
     * @return {object}               Returns a list of users matching the query.
     */
    api.user.search = function(accessToken, query, callback) {
        var uri = 'https://api.instagram.com/v1/users/search?q='+query+'&access_token='+accessToken;
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