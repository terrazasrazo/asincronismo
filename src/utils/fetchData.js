let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();

        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
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
            if (xhttp.readyState === 4) {
                /**
                 * 
                 * Http Messages Reference
                 * 200: "OK"
                 * 403: "Forbidden"
                 * 404: "Page not found"
                 * 
                 **/
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error: ' + url_api))
            }
        });
        xhttp.send();
    });
}

module.exports = fetchData;