const matchDatabase = []

const listAll = () => matchDatabase

const create = match => {
  matchDatabase.push(match)
}

const update = (matchId, match) => {
  const matchIndex = matchDatabase.findIndex(
    match => match.id == matchId
  )

  if (matchIndex > -1) {
    matchDatabase[matchIndex] = match
  }
}

const remove = matchId => {
  const matchIndex = matchDatabase.findIndex(
    match => match.id == matchId
  )

  if (matchIndex > -1) {
    matchDatabase.splice(matchIndex, 1)
  }
}

module.exports = {
  create,
  listAll,
  update,
  remove
}