import { Schema, model } from 'mongoose'

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

export default model('Calculator', Calculator)