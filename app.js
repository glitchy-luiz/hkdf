//const servidor = require('./config/servidor')
//const app = servidor.app
//const porta = servidor.porta

//para facilitar coloque:
const {app,porta} = require('./config/servidor')

//este consign pode estar ai, no servidor, e no app se quiser
const consign = require('consign') 
consign().include('./routes').into(app)

app.listen(porta)