**media.deleteMediaComment()**
----

* **Method:**
  
	
  Remove a comment either on the authenticated user's media object or authored by the authenticated user.
	
*  **Parameters:**

	```
	comments.deleteMediaComment(accessToken, mediaId, commentId, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `mediaId=[string]` : *a valid media id.*

   `commentId=[string]` : *a valid comment id*
   
   `callback=[function]` : *request callback.*   

* **Success Response:**
	
    Returns an object containing the request status.
	
```
{
    "meta": {
        "code": 200
    }, 
    "data": null
}
```
 
* **Error Response:**
	
    Returns an object containing a status code and an error.
	
```
{
	"meta": {
		"error_type": "OAuthAccessTokenException",
		"code": 400,
		"error_message": "..."
	}
}
```

* **Code:**

```
comments.deleteMediaComment = function(accessToken, mediaId, commentId, callback) {
    var req = {
        method: 'DELETE',
        uri: 'https://api.instagram.com/v1/media/'+mediaId+'/comments/'+commentId+'?access_token='+accessToken,
    };

    sendRequest(req, callback);
};
```