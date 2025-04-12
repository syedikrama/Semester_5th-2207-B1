let ikrama = require('mongoose');
const { SaveData } = require('../logic_function/function');

let health_collection = ikrama.Schema({
    sugar: {
        type: Number,
        required: true
    },
    heart_rate : {
        type: Number,
        required: true
    },
    bp: {
        type: Number,
        required: true
    },
    colestrol: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }

        
})



module.exports = ikrama.model('health_info', health_collection);