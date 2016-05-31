**tags.search()**
----

* **Method:**
  
	Search for tags by name.
  
*  **Parameters:**

	```
	tag.search(accessToken, query, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*
      
   `query=[string]` : *A valid tag name without a leading #. (eg. snowy, nofilter).*
   
   `callback=[function]` : *request callback.*

* **Success Response:**
	
	Returns an object containing the query result.

```
{
    "data": [
        {
            "media_count": 43590,
            "name": "snowy"
        },
        {
            "media_count": 3264,
            "name": "snowyday"
        },
        {
            "media_count": 1880,
            "name": "snowymountains"
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
tags.search = function(accessToken, query, callback) {
    var req = {
        method: 'GET',
        uri: 'https://api.instagram.com/v1/tags/search?access_token='+accessToken+'&q='+query,
    };

    sendRequest(req, callback);
};
```