/**
 * Created by SLedunois on 01/05/2016.
 */

exports.inodesta = function(params){

    var http = require('http');
    var https = require('https');
    var url = require('url');
    var crypto = require('crypto');
    var query = require('query');

    var api = {
        params : params,
        oAuth : {},
        media : {}
    };

    /**
     * Returning the uri needs to authorize the application
     * @returns {string} Access Token uri
     */
    api.oAuth.getAccessTokenUri = function(){
        return "https://api.instagram.com/oauth/authorize/?client_id="+api.params.client_id+"" +
            "&redirect_uri="+api.params.redirect_uri+"&response_type=code";
    };

    return api;
};