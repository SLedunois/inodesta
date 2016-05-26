**user.getUserInfo()**
----

* **Method:**
  
	Get information about a user. This endpoint requires the public_content scope if the user-id is not the owner of the access_token.
  
*  **Parameters:**

	```
	user.getUserInfo(accessToken, userId, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*
      
   `userId=[string]` : *user ID.*
   
   `callback=[function]` : *request callback.*

* **Success Response:**
	Returns an object containing user informations.

```
{
    "data": {
        "id": "1574083",
        "username": "snoopdogg",
        "full_name": "Snoop Dogg",
        "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_1574083_75sq_1295469061.jpg",
        "bio": "This is my bio",
        "website": "http://snoopdogg.com",
        "counts": {
            "media": 1320,
            "follows": 420,
            "followed_by": 3410
        }
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
user.getUserInfo = function(accessToken, userId, callback) {
	var req = {
		method : 'GET',
		uri : 'https://api.instagram.com/v1/users/'+userId+'/?access_token='+accessToken
	}

	request(req, function(error, request, body) {
		callback(JSON.parse(body));
	});
};
```