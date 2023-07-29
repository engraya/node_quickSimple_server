// import the built-in http node module
const http = require("http");

// setup the hostName and PortName
const hostname = "localhost";
const port = 5000;
// a default severStatus when error is not Found
const serverStatus = "Active";


// server request response function and content attributes 
const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`Hello, Your Node Server is Currently Running..........!!!!
    Host Name = ${hostname}
    Port = ${port}
    Status = ${serverStatus}`)

})


// server listen function and response message in the console
server.listen(port, hostname, () => {
    console.log(`Server is running at http:// ${hostname} and listening on port ${port}`)
});
