// Write Javascript code here 

var http = require('http');
var fs = require('fs'); // to get data from html file 


http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // req.url stores the path in the url 
    var url = req.url;
    if (url === "/") {
        // fs.readFile looks for the html file 
        // the first parameter is the path to the html page 
        // the second is the call back function 
        // if no file is found the function gives an err 
        // if the file is successfully found, the content of the file are contained in pgres 
        fs.readFile("index.html", function (err, pgres) {
            if (err)
                res.write("index.html NOT FOUND");
            else {
                // The following 3 lines 
                // are reponsible for sending the html file 
                // and ends the response process 
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgres);
                res.end();
            }
        });
    }
    else if (url === "/add") {
        fs.readFile("add.html", function (err, pgres) {
            if (err)
                res.write("add.html NOT FOUND");
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgres);
                res.end();
            }
        });
    }
    else if (url === "/detail") {
        fs.readFile("detail.html", function (err, pgres) {
            if (err)
                res.write("detail.html NOT FOUND");
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgres);
                res.end();
            }
        });
    }
    else if (url === "/detailsForMe") {
        fs.readFile("detailsForMe.html", function (err, pgres) {
            if (err)
                res.write("detailsForMe.html NOT FOUND");
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(pgres);
                res.end();
            }
        });
    }

}).listen(process.env.PORT || 3000, function () {
    console.log("Server Started ");
}); 