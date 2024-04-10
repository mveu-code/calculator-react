const { Schema, model } = require('mongoose')

const Calculator = new Schema({
    numberFields: {
        type: [Number],
        required: true
    },
    formula: {
        type: String,
        required: true
    }
})

module.exports = model('Calculator', Calculator)