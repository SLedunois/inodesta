**relationship.getUserSelFollow()**
----

* **Method:**
  
	Get the list of users this access token owner follows.
	
*  **Parameters:**

	```
	relationship.getUserSelFollow(accessToken, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*
   
   `callback=[function]` : *request callback.*
   

* **Success Response:**
	
    Returns a list of users followed by the access token owner.
	
```
{
    "data": [{
        "username": "kevin",
        "profile_picture": "http://images.ak.instagram.com/profiles/profile_3_75sq_1325536697.jpg",
        "full_name": "Kevin Systrom",
        "id": "3"
    },
    {
        "username": "instagram",
        "profile_picture": "http://images.ak.instagram.com/profiles/profile_25025320_75sq_1340929272.jpg",
        "full_name": "Instagram",
        "id": "25025320"
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
relationship.getUserSelFollow = function(accessToken, callback) {
    var req = {
        method : 'GET',
        uri : 'https://api.instagram.com/v1/users/self/follows?access_token='+accessToken
    };

    sendRequest(req, callback);
}

```