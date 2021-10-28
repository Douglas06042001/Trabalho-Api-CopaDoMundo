const playerDatabase = []

const listAll = () => playerDatabase

const create = player => {
  playerDatabase.push(player)
}

const update = (playerId, player) => {
  const playerIndex = playerDatabase.findIndex(
    player => player.id == playerId
  )

  if (playerIndex > -1) {
    playerDatabase[playerIndex] = player
  }
}

const remove = playerId => {
  const playerIndex = playerDatabase.findIndex(
    player => player.id == playerId
  )

  if (playerIndex > -1) {
    playerDatabase.splice(playerIndex, 1)
  }
}

module.exports = {
  create,
  listAll,
  update,
  remove
}