var express = require('express')
var router = express.Router()

var userController = require('../controllers/userController')

/* GET users listing. */
router.get('/users', userController.get_users)

router.post('/user/create', userController.post_user_create)

router.get('/user/:id', userController.get_user)



module.exports = router
