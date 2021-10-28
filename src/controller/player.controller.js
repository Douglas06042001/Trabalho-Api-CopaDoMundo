const playerService = require('../service/player.service')

const listAll = (req, res) => {
  res.send(playerService.listAll())
}

const create = (req, res) => {
  playerService.create(req.body)
  res.send('Jogador Criado com Sucesso!')
}

const update = (req, res) => {
  playerService.update(req.params.id, req.body)
  res.send('Jogador Atualizado com Sucesso')
}

const remove = (req, res) => {
  playerService.remove(req.params.id)
  res.send('Jogador Deletado com Sucesso!')
}

module.exports = {
  listAll,
  create,
  update,
  remove
}
