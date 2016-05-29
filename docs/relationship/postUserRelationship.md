**relationship.postUserRelationship()**
----

* **Method:**
  
	Modify the relationship between the current user and the target user. You need to include an action parameter to specify the relationship action you want to perform. Valid actions are: 'follow', 'unfollow' 'approve' or 'ignore'. Relationships are expressed using the following terms in the response:

    * **outgoing_status**: Your relationship to the user. Can be 'follows', 'requested', 'none'.
    * **incoming_status**: A user's relationship to you. Can be 'followed_by', 'requested_by', 'blocked_by_you', 'none'.    
	
*  **Parameters:**

	```
	relationship.postUserRelationship(accessToken, userId, action, callback)
	```

   **Required:**
 
   `accessToken=[string]` : *a valid access token.*

   `userId=[string]` : *a valid user id.*

   `action=[string]` : *a valid action. Valid actions are: `follow`, `unfollow`, `approve` or `ignore`.*
   
   `callback=[function]` : *request callback.*
   

* **Success Response:**
	
    Returns an object containing the current status of the request.
	
```
{
    "data": {
        "outgoing_status": "requested"
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
relationship.getUserSelFollow = function(accessToken, callback) {
   var req = {
        method: 'POST',
        uri: 'https://api.instagram.com/v1/users/'+userId+'/relationship?access_token='+accessToken,
        form: {
            action : action
        }
    };

    sendRequest(req, callback);
}

```