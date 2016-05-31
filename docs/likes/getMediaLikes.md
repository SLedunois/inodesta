**likes.getMedialikes()**
----

* **Method:**
  
	
  Get a list of users who have liked this media.
	
*  **Parameters:**

	```
	likes.getMedialikes(accessToken, mediaId, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `mediaId=[string]` : *a valid media id.*
   
   `callback=[function]` : *request callback.*   

* **Success Response:**
	
    Returns an object containing the request status.
	
```
{
    "data": [{
        "username": "jack",
        "first_name": "Jack",
        "last_name": "Dorsey",
        "type": "user",
        "id": "66"
    },
    {
        "username": "sammyjack",
        "first_name": "Sammy",
        "last_name": "Jack",
        "type": "user",
        "id": "29648"
    }]
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
likes.getMediaLikes = function(accessToken, mediaId, callback) {
  var req = {
      method: 'GET',
      uri: 'https://api.instagram.com/v1/media/'+mediaId+'/likes?access_token='+accessToken,
  };

  sendRequest(req, callback);
};
```