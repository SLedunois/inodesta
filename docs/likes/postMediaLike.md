**likes.postMediaLike()**
----

* **Method:**
  
	
  Set a like on this media by the currently authenticated user. 

  The public_content permission scope is required to create likes on a media that does not belong to the owner of the access_token.
	
*  **Parameters:**

	```
	likes.postMediaLike(accessToken, mediaId, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `mediaId=[string]` : *a valid media id.*

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
likes.postMediaLike = function(accessToken, mediaId, callback) {
    var req = {
        method: 'POST',
        uri: 'https://api.instagram.com/v1/media/'+mediaId+'/likes',
        form: {
            access_token : accessToken
        }
    };

    sendRequest(req, callback);
};
```