**user.getSelfUserInfo()**
----

* **Method:**
  
	Get informations about the owner of the access token.
  
*  **Parameters:**

	```
	user.getSelfUserInfo(accessToken, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*
   
   `callback=[function]` : *request callback.*

* **Success Response:**
	Returns an object containing self user informations.

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
user.getSelfUserInfo = function(accessToken, callback) {
	var req = {
		method : 'GET',
		uri : 'https://api.instagram.com/v1/users/self/?access_token='+accessToken
	}

	request(req, function(error, request, body) {
		callback(JSON.parse(body));
	});
};
```