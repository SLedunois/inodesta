**user.getSelfRecentMedia()**
----

* **Method:**
  
	Get the most recent media published by the owner of the access_token.
    By default, returns 10 media. Set as null every optional parameter if not used.  
*  **Parameters:**

	```
	user.getSelfRecentMedia(accessToken, count, minId, maxId, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*
   
   `callback=[function]` : *request callback.*
   
   **Optional:**
   
   `count=[integer]` : *Count of media to return.*
 
   `minId=[string]` : *Returns media later than this min_id.*
 
   `maxId=[string]` : *Returns media earlier than this max_id.*
   

* **Success Response:**
	Returns an object containing the most recent media published by the owner of the access_token.

```
{
    "data": [{
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": "1296710352",
            "text": "Inside le truc #foodtruck",
            "from": {
                "username": "kevin",
                "full_name": "Kevin Systrom",
                "type": "user",
                "id": "3"
            },
            "id": "26621408"
        },
        "likes": {
            "count": 15
        },
        "link": "http://instagr.am/p/BWrVZ/",
        "user": {
            "username": "kevin",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
            "id": "3"
        },
        "created_time": "1296710327",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/02/6ea7baea55774c5e81e7e3e1f6e791a7_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["foodtruck"],
        "id": "22721881",
        "location": {
            "latitude": 37.778720183610183,
            "longitude": -122.3962783813477,
            "id": "520640",
            "street_address": "",
            "name": "Le Truc"
        }
    },
    {
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
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": 1
        },
        "link": "http://instagr.am/p/D/",
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
        "type": "video",
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": [],
        "id": "363839373298",
        "user": {
            "username": "kevin",
            "full_name": "Kevin S",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
            "id": "3"
        },
        "location": null
    },
   ]
}```
 
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
user.getSelfRecentMedia = function(accessToken, count, minId, maxId, callback) {
	var uri = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+accessToken;
	if(count !== null) uri += '&count='+count;
	if(minId !== null) uri += '&min_id'+minId;
	if(maxId !== null) uri += '&max_id'+maxId
	var req = {
		method : 'GET',
		uri : uri
	}

	request(req, function(error, request, body) {
		callback(JSON.parse(body));
	});
};
```