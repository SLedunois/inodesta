**relationship.getUserSelRequestedBy()**
----

* **Method:**
  
	List the users who have requested this user's permission to follow.
	
*  **Parameters:**

	```
	relationship.getUserSelRequestedBy(accessToken, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*
   
   `callback=[function]` : *request callback.*
   

* **Success Response:**
	
    Returns the List of users who have requested this user's permission to follow.
	
```
{
    "data": [
        {
            "username": "mikeyk",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_4_75sq_1292324747_debug.jpg",
            "id": "4"
        }
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
relationship.getUserSelRequestedBy = function(accessToken, callback) {
    var req = {
        method : 'GET',
        uri : 'https://api.instagram.com/v1/users/self/requested-by?access_token='+accessToken
    };

    sendRequest(req, callback);
} 
```