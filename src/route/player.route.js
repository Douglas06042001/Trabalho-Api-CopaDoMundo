const express = require('express')
const router = express.Router()
const playerController = require('../controller/player.controller')

router.get('/', playerController.listAll)
router.post('/', playerController.create)
router.put('/:id', playerController.update)
router.delete('/:id', playerController.remove)

module.exports = router