const express = require('express')
const swaggerUi = require('swagger-ui-express')
const teamRouter = require('./route/team.route')
const playerRouter = require('./route/player.route')
const matchRouter = require('./route/match.route')

const swaggerFile = require('../swagger.json')

const app = express()
app.use(express.json())
app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/', (req, res) => {
  res.send('Bem vindo a API da copa do mundo')
})

app.use('/teams', teamRouter)
app.use('/players', playerRouter)
app.use('/matchs', matchRouter)

app.listen(process.env.PORT || 3000, function(){
  console.log("Server started.");
});