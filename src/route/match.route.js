const express = require('express')
const router = express.Router()
const matchController = require('../controller/match.controller')

router.get('/', matchController.listAll)
router.post('/', matchController.create)
router.put('/:id', matchController.update)
router.delete('/:id', matchController.remove)

module.exports = router