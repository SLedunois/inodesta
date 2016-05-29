**user.search()**
----

* **Method:**
  
	Get a list of users matching the query.
	
*  **Parameters:**

	```
	user.search(accessToken, query, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*
   
   `query=[String]` : *A query string.*

   `callback=[function]` : *request callback.*

* **Success Response:**

	Returns a list of users matching the query.
	
```
{
    "data": [{
        "username": "jack",
        "first_name": "Jack",
        "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_66_75sq.jpg",
        "id": "66",
        "last_name": "Dorsey"
    },
    {
        "username": "sammyjack",
        "first_name": "Sammy",
        "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_29648_75sq_1294520029.jpg",
        "id": "29648",
        "last_name": "Jack"
    },
    {
        "username": "jacktiddy",
        "first_name": "Jack",
        "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_13096_75sq_1286441317.jpg",
        "id": "13096",
        "last_name": "Tiddy"
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
user.search = function(accessToken, query, callback) {
	var uri = 'https://api.instagram.com/v1/users/search?q='+query+'&access_token='+accessToken;
	var req = {
		method : 'GET',
		uri : uri
	}
	request(req, function(error, request, body) {
		if(!error){
			callback(JSON.parse(body));
		} else {
			console.log(error);
		}
	});
}
```