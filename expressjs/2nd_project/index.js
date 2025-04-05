let exp = require('express');
let route = require('./routes/router');
require('dotenv').config();
let db = require('./connect_to_db/connection')

let app = exp();
// use routing file
app.use('/ikrama/route',route)

db().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port http://localhost:${process.env.PORT}/ikrama/route/`);
})
}).catch((e)=>{
    console.log(e)
})