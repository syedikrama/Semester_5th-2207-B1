let ikrama = require('mongoose');

let record_collection = ikrama.Schema({
    height: {
        type: Number,
        required: true
    },
    weight : {
        type: Number,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = ikrama.model('personal_record', record_collection);