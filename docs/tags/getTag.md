**tags.getTag()**
----

* **Method:**
  
	Get information about a tag object.
  
*  **Parameters:**

	```
	tags.getTag(accessToken, tagName, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*
      
   `tagName=[string]` : *a tag name.*
   
   `callback=[function]` : *request callback.*

* **Success Response:**
	
	Returns an object containing tag informations.

```
{
    "data": {
        "media_count": 472,
        "name": "nofilter",
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
tags.getTag = function(accessToken, tagName, callback) {
    var req = {
        method: 'GET',
        uri: 'https://api.instagram.com/v1/tags/'+tagName+'?access_token='+accessToken,
    };

    sendRequest(req, callback);
};
```