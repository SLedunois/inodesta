**comments.postMediaComment()**
----

* **Method:**
  
	
  Create a comment on a media object with the following rules:
  
  * The total length of the comment cannot exceed 300 characters.
  * The comment cannot contain more than 4 hashtags.
  * The comment cannot contain more than 1 URL.
  * The comment cannot consist of all capital letters.
  
  The public_content permission scope is required to create comments on a media that does not belong to the owner of  the access_token.
	
*  **Parameters:**

	```
	comments.postMediaComment(accessToken, mediaId, comment, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `mediaId=[string]` : *a valid media id.*

   `comment=[string]` : *the comment text*
   
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
comments.postMediaComment = function(accessToken, mediaId, comment, callback) {
    var req = {
        method: 'POST',
        uri: 'https://api.instagram.com/v1/media/'+mediaId+'/comments',
        form: {
            access_token : accessToken,
            text : comment
        }
    };

    sendRequest(req, callback);
}
```