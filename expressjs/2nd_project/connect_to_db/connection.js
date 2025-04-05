let mongodb = require('mongoose');
require('dotenv').config();

let db = process.env.DB_URL

let db_func = async function(){
    mongodb.connect(db).then(()=>{
        console.log("Connected to MongoDB")
    }).catch((e)=>{
        console.log(e)
    })
}

module.exports = db_func