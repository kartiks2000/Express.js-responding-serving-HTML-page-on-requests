# Express.js-responding-serving-HTML-page-on-requests
Express.js responding/serving HTML page on requests


// Responding with a HTML page on requests.


// We respond with HTML pages using the "res.sendFile()" , inside of which pass the address of the html file BUT we dont pass relative or absolute path directly because it does not need the path from our current location to the HTML file but from the Root of the OS to the HTML file.


// We do this by using the "path" module and then use the "path.join()" method to make the path automatically.
