//1.Indicate that the returned data is application/json
//2.Print out the incoming request on console.log
//3.Return a JSON string.


var http = require('http');

function handle_incoming_request(req, res) {
    console.log("INCOMING REQUEST: " + req.method + " " + req.url);
    res.writeHead(200, { "Content-Type" : "application/json" });
    res.end(JSON.stringify( { error: null }) + "\n");
}


var s = http.createServer(handle_incoming_request);

s.listen(8080);
