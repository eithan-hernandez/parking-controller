const express = require('express')
const app = express()




module.exports = app
app.get('/', (req, res) => {
    res.send('Api parking controller')
})


//app.use(require('./customer/conexion'))


module.exports = app