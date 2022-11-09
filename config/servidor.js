const express = require('express')
const app = express()


app.use(express.urlencoded({extended:false}))
//caso queira conectar o css no site use
app.use(express.static("./"))

const consing = require('consign')

consing().include('./routes').into(app)

const porta = process.env.PORT || 3535

module.exports={app,porta}