var express = require('express')
var router = express.Router()

var userController = require('../controllers/userController')

/* GET users listing. */
router.get('/users', userController.get_users)


module.exports = router
