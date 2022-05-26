const express = require('express')
const app = express()


const User = require("../controllers/user")
const Parking = require("../controllers/parking")


app.get('/', (req, res) => {
    res.send('Api parking controller')
})

app.get('/conexion', async (req, res) => {

    return User.comunidadUnamCheck(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
})

app.post('/comunidad-unam', async (req, res) => {
    //  mandan numero de cuenta y regresa los datos (status 200)
    return User.comunidadUnamCheck(req.body)
    console.log(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
})

app.get('/obtener-lugares', async (req, res) => {
    //  mandan numero de cuenta y regresa los datos (status 200)
    return Parking.getPlaces(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
})



app.post('/asignar-cajon', async (req, res) => {
    //  mandan numero de cuenta y regresa los datos (status 200)
    return Parking.AssignPlace(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
})



app.get('/liberar-cajon', async (req, res) => {
    //  mandan numero de cuenta y regresa los datos (status 200)
    return Parking.releasePlace(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
})


module.exports = app