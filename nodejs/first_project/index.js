require('dotenv').config()
port_no = process.env.PORT
let http_module = require("http")

http_module.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Hello</h1>");
    res.end();
}).listen(port_no,()=>{
    console.log(`Server is running on port http://localhost:${port_no}`);
})