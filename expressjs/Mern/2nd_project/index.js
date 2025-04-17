let exp = require('express');
let route = require('./routes/router');
require('dotenv').config();
let db = require('./connect_to_db/connection')

// export karien gy yahan pr un file ko 
let user = require('./collection/user_model');
let personal = require('./collection/personal_record');
let health = require('./collection/health_info');

// cors ko import karien gy phr neexhy call karien gy
let cor = require('cors'); 


const { connect } = require('mongoose');

// data add karien gy model mai
let add_data = async function(){
    try {
        user.create({
            name: 'Rahul',
            email: 'rahul@gmail.com',
            password: '123456',
            gender: 'male',
            age: 25,
            address: 'delhi',
        })
        console.log('user created successfully')
    } catch (error) {
        console.log(error)
    }
}

let personal_data = async function(){
    try {
        personal.create({
            height: 5.5,
            weight: 60,
            bmi: 25,
            category: 'normal',
        })
        console.log('personal data created successfully')
    } catch (error) {
        console.log(error)
    }
}

let  health_data= async function(){
    try {
        health.create({
            sugar: 100,
            bp: 120,
            heart_rate: 80,
            colestrol: 150,
        })
        console.log('health data created successfully')
    } catch (error) {
        console.log(error)
    }
}



let app = exp();
// ye data ko frontend sy connectkrny ky bad data ko bhejta hai
app.use(cor())
// import json to show exp.response  is ko route sy pehly hi likhna hai
app.use(exp.json())

// use routing file
app.use('/ikrama/route',route)

db().then(()=>{



    // add_data();
    // personal_data();
    // health_data();
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port http://localhost:${process.env.PORT}/ikrama/route/`);
})
}).catch((e)=>{
    console.log(e)
})