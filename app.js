'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Gracezylia Emanuella - 51017010 - Sistem Informasi !\n')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
