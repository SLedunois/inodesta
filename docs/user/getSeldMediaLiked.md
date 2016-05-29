**user.getSeldMediaLiked()**
----

* **Method:**
  
	Get the list of recent media like by the owner of the access token.
	
*  **Parameters:**

	```
	user.getSeldMediaLiked(accessToken, count, maxLikeId, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*
   
   `callback=[function]` : *request callback.*
   
   **Optional:**
   
   `count=[integer]` : *Count of media to return.*
 
   `maxId=[string]` : *Returns media earlier than this max_id.*
   

* **Success Response:**
	
    Returns an object containing the list of recent media like by the owner of the access token.
	
```
{
    "data": [{
        "location": {
            "id": "833",
            "latitude": 37.77956816727314,
            "longitude": -122.41387367248539,
            "name": "Civic Center BART"
        },
        "comments": {
            "count": 16
        },
        "caption": null,
        "link": "http://instagr.am/p/BXsFz/",
        "likes": {
            "count": 190
        },
        "created_time": "1296748524",
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/03/efc502667a554329b52d9a6bab35b24a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/03/efc502667a554329b52d9a6bab35b24a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/02/03/efc502667a554329b52d9a6bab35b24a_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": [],
        "id": "22987123",
        "user": {
            "username": "kevin",
            "full_name": "Kevin S",
            "profile_picture": "http://distillery.s3.amazonaws.com/profiles/profile_3_75sq_1295574122.jpg",
            "id": "3"
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
user.getSeldMediaLiked = function(accessToken, count, maxLikeId, callback) {
	var uri = 'https://api.instagram.com/v1/users/self/media/liked?access_token='+accessToken;
	if(count !== null) uri += '&count='+count;
	if(maxLikeId !== null) uri += '&max_like_id'+maxLikeId;
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
};

```