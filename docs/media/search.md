**media.search()**
----

* **Method:**
  
	
  Search for recent media in a given area.
	
*  **Parameters:**

	```
	media.search(accessToken, lat, lng, distance, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   
   `callback=[function]` : *request callback.* 

   **Required:**

    `lat=[string]` : *Latitude of the center search coordinate. If used, lng is required. If not, set it as `null`* 

    `lng=[string]` : *Longitude of the center search coordinate. If used, lat is required. If not, set it as `null`*        

    `distance=[integer]` : *Default is 1km (distance=1000), max distance is 5km.* 

* **Success Response:**
	
    Returns an object containing the list of medias.
	
```
{
    "data": [{
        "distance": 41.741369194629698,
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": [],
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": 1
        },
        "link": "http://instagr.am/p/BQEEq/",
        "user": {
            "username": "mahaface",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_1329896_75sq_1294131373.jpg",
            "id": "1329896"
        },
        "created_time": "1296251679",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/28/0cc4f24f25654b1c8d655835c58b850a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/28/0cc4f24f25654b1c8d655835c58b850a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/28/0cc4f24f25654b1c8d655835c58b850a_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "20988202",
        "location": null
    },
    {
        "distance": 41.741369194629698,
        "type": "video",
        "videos": {
            "low_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4",
                "width": 480,
                "height": 480
            },
            "standard_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_101.mp4",
                "width": 640,
                "height": 640
            },
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": [],
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": 1
        },
        "link": "http://instagr.am/p/D/",
        "user": {
            "username": "kevin",
            "full_name": "Kevin S",
            "profile_picture": "...",
            "id": "3"
        },
        "created_time": "1279340983",
        "images": {
            "low_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "3",
        "location": null
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
media.search = function(accessToken, lat, lng, distance, callback) {
    var uri = 'https://api.instagram.com/v1/media/search?access_token='+accessToken;
    if(lat) uri += '&lat='+lat;
    if(lng) uri += '&lng='+lng;
    if(distance) uri += '&distance='+distance;
    var req = {
        methode : 'GET',
        uri : uri
    }

    sendRequest(req, callback);
};
```