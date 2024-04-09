const PORT = 9001
const URLDB = 'mongodb://127.0.0.1:27017/'

const express = require('express')
const cors = require('cors')
const jsonwebtoken = require('jsonwebtoken')
const mongoose = require('mongoose')
const { secret } = require('./config')

const app = express()

const generateAccessToken = (id, login, role) => {
    const payload = {
        id, login, role
    }

    return jsonwebtoken.sign(payload, secret, { expiresIn: '24h' })
}

app.use(cors())
app.use(express.json())

const start = async () => {
    try {
        await mongoose.connect(URLDB)
        app.listen(PORT, () => console.log(`Сервер работает на порту ${PORT}`))
    } catch (e) {
        console.error(e)
    }
}

start()
