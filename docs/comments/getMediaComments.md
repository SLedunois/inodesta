**media.getMedia()**
----

* **Method:**
  
	
  Get a list of recent comments on a media object. 

  The public_content permission scope is required to get comments for a media that does not belong to the owner of the access_token.
	
*  **Parameters:**

	```
	comments.getMediaComments(accessToken, mediaId, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `mediaId=[string]` : *a valid media id.*
   
   `callback=[function]` : *request callback.*   

* **Success Response:**
	
    Returns an object containing a list of recent comments on a media object
	
```
{
    "data": [
        {
            "created_time": "1280780324",
            "text": "Really amazing photo!",
            "from": {
                "username": "snoopdogg",
                "profile_picture": "http://images.instagram.com/profiles/profile_16_75sq_1305612434.jpg",
                "id": "1574083",
                "full_name": "Snoop Dogg"
            },
            "id": "420"
        },
        ...
    ]
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
.comments.getMediaComments = function(accessToken, mediaId, callback) {
    var req = {
        methode : 'GET',
        uri : 'https://api.instagram.com/v1/media/'+mediaId+'/comments?access_token='+accessToken
    }

    sendRequest(req, callback);
}
```