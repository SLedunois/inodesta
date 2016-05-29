**media.getMedia()**
----

* **Method:**
  
	
  Get information about a media object. Use the type field to differentiate between image and video media in the response. You will also receive the user_has_liked field which tells you whether the owner of the access_token has liked this media.
  
  The public_content permission scope is required to get a media that does not belong to the owner of the access_ token.
	
*  **Parameters:**

	```
	media.getMedia(accessToken, mediaId, type, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `mediaId=[string]` : *a valid media id.*
   
   `callback=[function]` : *request callback.*   

* **Success Response:**
	
    Returns an object containing the media provides by the media id.
	
```
{
    "data": {
        "type": "image",
        "users_in_photo": [{
            "user": {
                "username": "kevin",
                "full_name": "Kevin S",
                "id": "3",
                "profile_picture": "..."
            },
            "position": {
                "x": 0.315,
                "y": 0.9111
            }
        }],
        "filter": "Walden",
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
                "url": "http://distillery.s3.amazonaws.com/media/2010/07/16/4de37e03aa4b4372843a7eb33fa41cad_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2010/07/16/4de37e03aa4b4372843a7eb33fa41cad_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2010/07/16/4de37e03aa4b4372843a7eb33fa41cad_7.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "3",
        "location": null
    }
}

/*------------
Video Example
-------------*/

{
    "data": {
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
media.getMedia = function(accessToken, mediaId, type, callback) {
  var uri = 'https://api.instagram.com/v1/media/'+mediaId+'?access_token='+accessToken;
  if(type) uri += '&type='+type;
  var req = {
      methode : 'GET',
      uri : uri
  }

  sendRequest(req, callback);
}
```