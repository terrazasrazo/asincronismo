let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function(event) {
        /**
         * 
         * Holds the status of the XMLHttpRequest.
         * 0: request not initialized
         * 1: server connection established
         * 2: request received
         * 3: processing request
         * 4: request finished and response is ready
         * 
        **/
        if(xhttp.readyState === 4) {
            /**
             * 
             * Http Messages Reference
             * 200: "OK"
             * 403: "Forbidden"
             * 404: "Page not found"
             * 
            **/
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}