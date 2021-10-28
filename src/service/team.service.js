const teamDatabase = []

const listAll = () => teamDatabase

const create = team => {
  teamDatabase.push(team)
}

const update = (teamId, team) => {
  const teamIndex = teamDatabase.findIndex(
    team => team.id == teamId
  )

  if (teamIndex > -1) {
    teamDatabase[teamIndex] = team
  }
}

const remove = teamId => {
  const teamIndex = teamDatabase.findIndex(
    team => team.id == teamId
  )

  if (teamIndex > -1) {
    teamDatabase.splice(teamIndex, 1)
  }
}

module.exports = {
  create,
  listAll,
  update,
  remove,
  teamDatabase
}