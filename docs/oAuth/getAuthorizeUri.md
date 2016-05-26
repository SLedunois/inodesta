**oAuth.getAuthorizeUri()**
----

* **Method:**
  
  Get the uri needs to authorize the application.

* **Code:**

 ```
 oAuth.getAuthorizeUri = function(){
        return "https://api.instagram.com/oauth/authorize/?client_id="+api.params.client_id+"" +
            "&redirect_uri="+api.params.redirect_uri+"&response_type=code";
 };
 ```