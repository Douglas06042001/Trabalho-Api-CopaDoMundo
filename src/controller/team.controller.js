const teamService = require('../service/team.service')

const listAll = (req, res) => {
  res.send(teamService.listAll())
}

const create = (req, res) => {
  teamService.create(req.body)
  res.send('Seleção Criada com Sucesso!')
}

const update = (req, res) => {
  teamService.update(req.params.id, req.body)
  res.send('Seleção foi Atualizada com Sucesso!')
}

const remove = (req, res) => {
  teamService.remove(req.params.id)
  res.send('Seleção Deletada com sucesso!')
}

module.exports = {
  listAll,
  create,
  update,
  remove
}
