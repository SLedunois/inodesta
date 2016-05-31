/**
 * Created by SLedunois on 01/05/2016.
 */

exports.inodesta = function(params){

    var request = require('request');

    var api = {
        params : params,
        oAuth : {},
        relationship : {},
        user : {},
        media : {},
        comments : {},
        likes : {},
        tags : {},
        location : {}
    };

    /**
     * Send request and manage response.
     * @param  {object}   req      request to send.
     * @param  {Function} callback 
     * @return {object}            
     */
    var sendRequest = function(req, callback) {
        request(req, function(error, request, body) {
            if(!error){
                callback(JSON.parse(body));
            } else {
                console.log(error);
            }
        });
    }

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

        sendRequest(req, callback);
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
      };

        sendRequest(req, callback);
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
        };

        sendRequest(req, callback);
    };

    
    /**
     * Get the most recent media published by the owner of the access_token.
     * By default, returns 10 media. Set as null every optional parameter if not used.
     * @param  {string}   accessToken A valid access token.
     * @param  {integer}   count       [Optional] Count of media to return
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
        };

        sendRequest(req, callback);
    };

    /**
     * Get the most recent media published by a user.
     * By default, returns 10 media. Set as null every optional parameter if not used.
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
        };

        sendRequest(req, callback);
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
        };

        sendRequest(req, callback);
    };

    /**
     * Get a list of users matching the query.
     * @param  {string}   accessToken A valid access token.
     * @param  {string}   query       A query string.
     * @param  {Function} callback    
     * @return {object}               Returns a list of users matching the query.
     */
    api.user.search = function(accessToken, query, callback) {
        var req = {
            method : 'GET',
            uri : 'https://api.instagram.com/v1/users/search?q='+query+'&access_token='+accessToken
        };

        sendRequest(req, callback);
    };

    /**
     * Get the list of users this access token owner follows.
     * @param  {String}   accessToken A valid access token.
     * @param  {Function} callback    
     * @return {object}               Returns a list of users followed by the access token owner.
     */
    api.relationship.getUserSelFollow = function(accessToken, callback) {
        var req = {
            method : 'GET',
            uri : 'https://api.instagram.com/v1/users/self/follows?access_token='+accessToken
        };

        sendRequest(req, callback);
    };

    /**
     * Get the list of users this user is followed by.
     * @param  {String}   accessToken A valid access token.
     * @param  {Function} callback    
     * @return {object}               Returns the list of users this user is followed by.
     */
    api.relationship.getUserSelFollowedBy = function(accessToken, callback) {
        var req = {
            method : 'GET',
            uri : 'https://api.instagram.com/v1/users/self/followed-by?access_token='+accessToken
        };

        sendRequest(req, callback);
    };

    /**
     * List the users who have requested this user's permission to follow.
     * @param  {String}   accessToken A valid access token.
     * @param  {Function} callback    
     * @return {object}               Returns the List of users who have requested this user's permission to follow.
     */
    api.relationship.getUserSelRequestedBy = function(accessToken, callback) {
        var req = {
            method : 'GET',
            uri : 'https://api.instagram.com/v1/users/self/requested-by?access_token='+accessToken
        };

        sendRequest(req, callback);
    };

    /**
     * Get information about a relationship to another user. Relationships are expressed using the following terms in the response:
     * outgoing_status: Your relationship to the user. Can be 'follows', 'requested', 'none'.
     * incoming_status: A user's relationship to you. Can be 'followed_by', 'requested_by', 'blocked_by_you', 'none'.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   userId      User id.
     * @param  {Function} callback    
     * @return {object}               Returns information about provided user's relationship.
     */
    api.relationship.getUserRelationship = function(accessToken, userId, callback) {
        var req = {
            method : 'GET',
            uri : 'https://api.instagram.com/v1/users/'+userId+'/relationship?access_token='+accessToken
        };

        sendRequest(req, callback);
    };

    /**
     * Modify the relationship between the current user and the target user. 
     * You need to include an action parameter to specify the relationship action you want to perform. 
     * Valid actions are: 'follow', 'unfollow' 'approve' or 'ignore'. 
     * Relationships are expressed using the following terms in the response:
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   userId      A valid user id.
     * @param  {String}   action      A valid action (follow, unfollow, approve, ignore).
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the current status of the request.
     */
    api.relationship.postUserRelationship = function(accessToken, userId, action, callback) {
        var req = {
            method: 'POST',
            uri: 'https://api.instagram.com/v1/users/'+userId+'/relationship?access_token='+accessToken,
            form: {
                action : action
            }
        };

        sendRequest(req, callback);
    };

    /**
     * Get information about a media object. Use the type field to differentiate between image and video media in the response.
     * You will also receive the user_has_liked field which tells you whether the owner of the access_token has liked this media.
     * The public_content permission scope is required to get a media that does not belong to the owner of the access_token
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   mediaId     A valid media id.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the media provides by the media id.
     */
    api.media.getMedia = function(accessToken, mediaId, callback) {
        var uri = 'https://api.instagram.com/v1/media/'+mediaId+'?access_token='+accessToken;
        var req = {
            methode : 'GET',
            uri : uri
        }

        sendRequest(req, callback);
    };

    /**
     * this endpoint returns the same response as GET /media/media-id.
     * A media object's shortcode can be found in its shortlink URL. 
     * An example shortlink is http://instagram.com/p/tsxp1hhQTG/. 
     * Its corresponding shortcode is tsxp1hhQTG.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   shortcode   A valid shortcode
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the media provides by the shortcode.
     */
    api.media.getMediaShortCode = function(accessToken, shortcode, callback) {
        var req = {
            methode : 'GET',
            uri : 'https://api.instagram.com/v1/media/shortcode/'+shortcode+'?access_token='+accessToken
        }

        sendRequest(req, callback);
    };

    /**
     * Search for recent media in a given area.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   lat         Latitude of the center search coordinate. If used, lng is required.
     * @param  {String}   lng         Longitude of the center search coordinate. If used, lat is required.
     * @param  {integer}   distance   Default is 1km (distance=1000), max distance is 5km.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the list of medias.
     */
    api.media.search = function(accessToken, lat, lng, distance, callback) {
        var uri = 'https://api.instagram.com/v1/media/search?access_token='+accessToken;
        if(lat) uri += '&lat='+lat;
        if(lng) uri += '&lng='+lng;
        if(distance) uri += '&distance='+distance;
        var req = {
            methode : 'GET',
            uri : uri
        }

        sendRequest(req, callback);
    };

    /**
     * Get a list of recent comments on a media object. 
     * The public_content permission scope is required to get comments for a media that does not belong to the owner of the access_token.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   mediaId     A valid media id.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing a list of recent comments on a media object
     */
    api.comments.getMediaComments = function(accessToken, mediaId, callback) {
        var req = {
            methode : 'GET',
            uri : 'https://api.instagram.com/v1/media/'+mediaId+'/comments?access_token='+accessToken
        }

        sendRequest(req, callback);
    };

    /**
     * Create a comment on a media object with the following rules:
     * - The total length of the comment cannot exceed 300 characters.
     * - The comment cannot contain more than 4 hashtags.
     * - The comment cannot contain more than 1 URL.
     * - The comment cannot consist of all capital letters.
     * The public_content permission scope is required to create comments on a media that does not belong to the owner of the access_token.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   mediaId     A valid media id.
     * @param  {String}   comment     Comment
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the request status.
     */
    api.comments.postMediaComment = function(accessToken, mediaId, comment, callback) {
        var req = {
            method: 'POST',
            uri: 'https://api.instagram.com/v1/media/'+mediaId+'/comments',
            form: {
                access_token : accessToken,
                text : comment
            }
        };

        sendRequest(req, callback);
    };

    /**
     * Remove a comment either on the authenticated user's media object or authored by the authenticated user.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   mediaId     A valid media id.
     * @param  {String}   commentId   A valid comment id.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the request status.
     */
    api.comments.deleteMediaComment = function(accessToken, mediaId, commentId, callback) {
        var req = {
            method: 'DELETE',
            uri: 'https://api.instagram.com/v1/media/'+mediaId+'/comments/'+commentId+'?access_token='+accessToken,
        };

        sendRequest(req, callback);
    };

    /**
     * Get a list of users who have liked this media.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   mediaId     A valid media id.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the list of users who have liked the media.
     */
    api.likes.getMediaLikes = function(accessToken, mediaId, callback) {
        var req = {
            method: 'GET',
            uri: 'https://api.instagram.com/v1/media/'+mediaId+'/likes?access_token='+accessToken,
        };

        sendRequest(req, callback);
    };

    /**
     * Set a like on this media by the currently authenticated user. 
     * The public_content permission scope is required to create likes on a media that does not belong to the owner of the access_token.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   mediaId     A valid media id.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the request status.
     */
    api.likes.postMediaLike = function(accessToken, mediaId, callback) {
        var req = {
            method: 'POST',
            uri: 'https://api.instagram.com/v1/media/'+mediaId+'/likes',
            form: {
                access_token : accessToken
            }
        };

        sendRequest(req, callback);
    };

    /**
     * Remove a like on this media by the currently authenticated user. 
     * The public_content permission scope is required to delete likes on a media that does not belong to the owner of the access_token.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   mediaId     A valid media id.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the request status.
     */
    api.likes.deleteMediaLike = function(accessToken, mediaId, callback) {
        var req = {
            method: 'DELETE',
            uri: 'https://api.instagram.com/v1/media/'+mediaId+'/likes?access_token='+accessToken,
        };

        sendRequest(req, callback);
    };

    /**
     * Get information about a tag object.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   tagName     A tag name.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing tag informations.
     */
    api.tags.getTag = function(accessToken, tagName, callback) {
        var req = {
            method: 'GET',
            uri: 'https://api.instagram.com/v1/tags/'+tagName+'?access_token='+accessToken,
        };

        sendRequest(req, callback);
    };

    /**
     * Get a list of recently tagged media.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   tagName     A tag name.
     * @param  {integer}  count       [optional] Count of tagged media to return. Set as null if not used.
     * @param  {String}   minTagId    [optional] Return media before this min_tag_id. Set as null if not used.
     * @param  {String}   maxTagId    [optional] Return media after this max_tag_id. Set as null if not used.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the recent media tagged.
     */
    api.tags.getMediaRecentTags = function(accessToken, tagName, count, minTagId, maxTagId, callback) {
        var uri = 'https://api.instagram.com/v1/tags/'+tagName+'/media/recent?access_token='+accessToken;
        if(count) uri += '&count='+count;
        if(minTagId) uri += '&min_tag_id='+minTagId;
        if(maxTagId) uri += '&max_tag_id='+maxTagId;
        var req = {
            method: 'GET',
            uri: uri
        };

        sendRequest(req, callback);
    };

    /**
     * Search for tags by name.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   query       A valid tag name without a leading #. (eg. snowy, nofilter)
     * @param  {Function} callback    
     * @return {object}               Returns an object containing the query result
     */
    api.tags.search = function(accessToken, query, callback) {
        var req = {
            method: 'GET',
            uri: 'https://api.instagram.com/v1/tags/search?access_token='+accessToken+'&q='+query,
        };

        sendRequest(req, callback);
    };

    /**
     * Get information about a location.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   locationId  A valid location id.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing location informations.
     */
    api.location.getLocation = function(accessToken, locationId, callback) {
        var req = {
            method: 'GET',
            uri: 'https://api.instagram.com/v1/locations/'+locationId+'?access_token='+accessToken,
        };

        sendRequest(req, callback);
    };

    /**
     * Get a list of recent media objects from a given location.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   locationId  A valid location id.
     * @param  {String}   minId       [optional] Return media before this min_id. Set as null if not used.
     * @param  {String}   maxID       [optional] Return media after this max_id. Set as null if not used.
     * @param  {Function} callback    
     * @return {object}               Returns an object containing a list of recent media objects from a given location.
     */
    api.location.getLocationRecentMedia = function(accessToken, locationId, minId, maxId, callback) {
        var uri = 'https://api.instagram.com/v1/locations/'+locationId+'/media/recent?access_token='+accessToken;
        if(minId) uri += '&min_id'+minId;
        if(maxId) uri += '&max_id'+maxId;
        var req = {
            method: 'GET',
            uri : uri
        }

        sendRequest(req, callback);
    };

    /**
     * Search for a location by geographic coordinate.
     * @param  {String}   accessToken A valid access token.
     * @param  {String}   lat              Latitude of the center search coordinate. If used, lng is required.
     * @param  {String}   lng              Longitude of the center search coordinate. If used, lat is required.
     * @param  {String}   facebookPlacesId [Optional] Returns a location mapped off of a Facebook places id. If used, lat and lng are not required.
     * @param  {integer}   distance        Default is 500m (distance=500), max distance is 750.
     * @param  {Function} callback         
     * @return {object}                    Returns an object containing location by geographic coordinate.
     */
    api.location.search = function(accessToken, lat, lng, facebookPlacesId, distance, callback) {
        var uri = 'https://api.instagram.com/v1/locations/search?access_token='+accessToken+'&lat='+lat+'&lng='+lng;
        if(distance) uri += '&distance='+distance;
        if(facebookPlacesId) uri += '&facebook_places_id='+facebookPlacesId;

        var req = {
            method : 'GET',
            uri : uri
        };

        sendRequest(req, callback);

    };

    return api;
};