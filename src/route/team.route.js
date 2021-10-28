const express = require('express')
const router = express.Router()
const teamController = require('../controller/team.controller')

router.get('/', teamController.listAll)
router.post('/', teamController.create)
router.put('/:id', teamController.update)
router.delete('/:id', teamController.remove)

module.exports = router