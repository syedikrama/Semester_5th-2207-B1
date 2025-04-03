let mongodb = require('mongoose');
require('dotenv').config();

mongodb.connect(process.env.URL).
then(() =>{ 
    console.log('Connected to MongoDB')
}).catch((e)=>{
    console.log(e)
})

