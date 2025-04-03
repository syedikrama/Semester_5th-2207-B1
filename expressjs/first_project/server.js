var exp = require('express');
require('dotenv').config();
port_no = process.env.PORT_NO

var route = require('./routes/router');

let app = exp();
app.use('/' , route);

app.listen(port_no,()=>{
    console.log(`server is running on port http://localhost:${port_no}`);
})
