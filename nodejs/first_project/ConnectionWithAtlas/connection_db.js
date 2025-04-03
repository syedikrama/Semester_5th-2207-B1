let mongodb = require('mongoose');
require('dotenv').config();
// let url = process.env.ATLAS_URL;

mongodb.connect('mongodb+srv://syedikramasadiq1888:ikrama03110254929@cluster.w4arn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster').
then(()=>{
    console.log('Connected to MongoDB Atlas');
}).catch((e)=>{
    console.log(e);
})