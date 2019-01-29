const express = require('express')
let router = express.Router()

const userController = require('../controllers/userController')

/* GET users listing. */
router.get('/users', userController.get_users)

router.get('/users/delete/all', userController.get_users_delete)

router.post('/user/create', userController.post_user_create)

router.get('/user/:id', userController.get_user)

router.post('/user/:id/delete', userController.post_user_delete)

module.exports = router