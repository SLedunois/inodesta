**location.getLocationRecentMedia()**
----

* **Method:**
	
  Get a list of recent media objects from a given location.
	
*  **Parameters:**

	```
	location.getLocationRecentMedia(accessToken, locationId, minId, maxId, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `locationId=[string]` : *a valid location id.*
   
   `callback=[function]` : *request callback.*   

   **Optionals:**

   `minId=[string]` : * Return media before this min_id.*

   `maxId=[string]` : * Return media after this max_id.*

* **Success Response:**
	
    Returns an object containing a list of recent media objects from a given location.
	
```
{
    "data": [{
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["expobar"],
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": "1296532028",
            "text": "@mikeyk pulls a shot on our #Expobar",
            "from": {
                "username": "josh",
                "full_name": "Josh Riedel",
                "type": "user",
                "id": "33"
            },
            "id": "25663923"
        },
        "likes": {
            "count": 35
        },
        "link": "http://instagr.am/p/BUS3X/",
        "user": {
            "username": "josh",
            "profile_picture": "...",
            "id": "33"
        },
        "created_time": "1296531955",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "user_has_liked": false,
        "id": "22097367",
        "location": {
            "latitude": 37.780885099999999,
            "id": "514276",
            "longitude": -122.3948632,
            "name": "Instagram"
        }
    },
    {
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
        "location": {
            "latitude": 37.780885099999999,
            "id": "514276",
            "longitude": -122.3948632,
            "name": "Instagram"
        }
    },
    ...]
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
location.getLocationRecentMedia = function(accessToken, locationId, minId, maxId, callback) {
    var uri = 'https://api.instagram.com/v1/locations/'+locationId+'/media/recent?access_token='+accessToken;
    if(minId) uri += '&min_id'+minId;
    if(maxId) uri += '&max_id'+maxId;
    var req = {
        method: 'GET',
        uri : uri
    }

    sendRequest(req, callback);
};
```