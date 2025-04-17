let ikrama = require('mongoose');

let user_collection = ikrama.Schema({
    name: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = ikrama.model('User_model', user_collection);