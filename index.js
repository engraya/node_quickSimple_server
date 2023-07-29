const http = require("http");

const hostname = "localhost";

const port = 5000;
const serverStatus = "Active";



const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(`Hello, Your Node Server is Currently Running..........!!!!
    Host Name = ${hostname}
    Port = ${port}
    Status = ${serverStatus}`)

})


server.listen(port, hostname, () => {
    console.log(`Server is running at http:// ${hostname} and listening on port ${port}`)
});
