const matchService = require('../service/match.service')

const listAll = (req, res) => {
  res.send(matchService.listAll())
}

const create = (req, res) => {
  matchService.create(req.body)
  res.send('Partida criada com Sucesso!')
}

const update = (req, res) => {
  matchService.update(req.params.id, req.body)
  res.send('Partida atualizada com Sucesso!')
}

const remove = (req, res) => {
  matchService.remove(req.params.id)
  res.send('Partida deletada com Sucesso!')
}

module.exports = {
  listAll,
  create,
  update,
  remove
}
