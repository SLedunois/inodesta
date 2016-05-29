**oAuth.getAccessToken()**
----

* **Method:**
  
	Get the oAuth access token for a user id.
  
*  **Parameters:**

	```
	oAuth.getAccessToken(code, callback)
	```

   **Required:**
 
   `code=[string]` : *user code.*
   
   `callback=[function]` : *request callback.*

* **Success Response:**
	Returns an object containing the containing user access token and user informations.

```
{
    "access_token": "fb2e77d.47a0479900504cb3ab4a1f626d174d2d",
    "user": {
        "id": "1574083",
        "username": "snoopdogg",
        "full_name": "Snoop Dogg",
        "profile_picture": "..."
    }
}
```
 
* **Error Response:**
	Returns an object containing a status code and an error.

```
{ 
	code: 400,
  	error_type: 'OAuthException',
  	error_message: '...' 
}
```

* **Code:**

```
oAuth.getAccessToken = function(code, callback){
	var req = {
		method: 'POST',
		uri: 'https://api.instagram.com/oauth/access_token',
		form: {
			client_id : <client_id>,
			client_secret : <client_secret>,
			grant_type : "authorization_code",
			redirect_uri : <redirect_uri>,
			code : code
		}
	};

	request(req, function(error, request, body) {
		callback(JSON.parse(body));
	});
};
```