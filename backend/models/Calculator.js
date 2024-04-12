const { Schema, model } = require('mongoose')

const Calculator = new Schema({
    nameCalc: {
        type: String,
        required: true
    },
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