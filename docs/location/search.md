**location.search()**
----

* **Method:**
	
  Get a list of recent media objects from a given location.
	
*  **Parameters:**

	```
	location.search(accessToken, lat, lng, facebookPlacesId, distance, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `lat=[string]` : *Latitude of the center search coordinate. If used, lng is required.*

   `lng=[string]` : *Longitude of the center search coordinate. If used, lat is required.*
   
   `callback=[function]` : *request callback.*   

   **Optionals:**

   `facebookPlacesId=[string]` : *Returns a location mapped off of a Facebook places id. If used, lat and lng are not required.*

   `distance=[string]` : *Default is 500m (distance=500), max distance is 750.*

* **Success Response:**
	
    Returns an object containing location by geographic coordinate.
	
```
{
    "data": [{
        "id": "788029",
        "latitude": 48.858844300000001,
        "longitude": 2.2943506,
        "name": "Eiffel Tower, Paris"
    },
    {
        "id": "545331",
        "latitude": 48.858334059662262,
        "longitude": 2.2943401336669909,
        "name": "Restaurant 58 Tour Eiffel"
    },
    {
        "id": "421930",
        "latitude": 48.858325999999998,
        "longitude": 2.294505,
        "name": "American Library in Paris"
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
location.search = function(accessToken, lat, lng, facebookPlacesId, distance, callback) {
    var uri = 'https://api.instagram.com/v1/locations/search?access_token='+accessToken+'&lat='+lat+'&lng='+lng;
    if(distance) uri += '&distance='+distance;
    if(facebookPlacesId) uri += '&facebook_places_id='+facebookPlacesId;

    var req = {
        method : 'GET',
        uri : uri
    };

    sendRequest(req, callback);

};
```