**location.getlocation()**
----

* **Method:**
	
  Get information about a location.
	
*  **Parameters:**

	```
	location.getLocation(accessToken, locationId, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `locationId=[string]` : *a valid location id.*
   
   `callback=[function]` : *request callback.*   

* **Success Response:**
	
    RReturns an object containing location informations.
	
```
{
    "data": {
        "id": "1",
        "name": "Dogpatch Labs",
        "latitude": 37.782,
        "longitude": -122.387,
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
location.getLocation = function(accessToken, locationId, callback) {
    var req = {
        method: 'GET',
        uri: 'https://api.instagram.com/v1/locations/'+locationId+'?access_token='+accessToken,
    };

    sendRequest(req, callback);
};
```