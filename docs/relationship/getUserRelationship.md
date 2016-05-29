**relationship.getUserRelationship()**
----

* **Method:**
  
	Get information about a relationship to another user. Relationships are expressed using the following terms in the response:

    * **outgoing_status**: Your relationship to the user. Can be 'follows', 'requested', 'none'.
    * **incoming_status**: A user's relationship to you. Can be 'followed_by', 'requested_by', 'blocked_by_you', 'none'.
	
*  **Parameters:**

	```
	relationship.getUserRelationship(accessToken, userId, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `userId=[string]` : *a valid user id.*
   
   `callback=[function]` : *request callback.*
   

* **Success Response:**
	
    Returns information about provided user's relationship.
	
```
{
    "data": {
        "outgoing_status": "none",
        "incoming_status": "requested_by"
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
relationship.getUserSelRequestedBy = function(accessToken, callback) {
    var req = {
        method : 'GET',
        uri : 'https://api.instagram.com/v1/users/self/requested-by?access_token='+accessToken
    };

    sendRequest(req, callback);
} 
```