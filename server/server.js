require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env;
const ctrl = require('./controllers/controller')

const app = express();
app.use(express.json());

app.post('/api/draft', ctrl.addPlayer)
app.get('/api/players', ctrl.getRoster)
app.put('/api/players/:id', ctrl.changeNumber)
app.delete('/api/players/:elementId', ctrl.waive)
app.post('/api/trade/:elementId', ctrl.trade)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}.`))