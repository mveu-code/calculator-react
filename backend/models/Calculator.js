import { Schema, model } from 'mongoose'

const Calculator = new Schema({
    nameCalc: {
        type: String,
        required: true
    },
    percent: {
        type: Number,
        required: true
    }
})

export default model('Calculator', Calculator)