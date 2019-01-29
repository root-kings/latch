var moment = require('moment')

var User = require('../models/user')

exports.get_users = (req, res) => {
    User.find({}).exec((err, result) => {
        if (err) return res.status(500).send(err)

        if (result) return res.send(result)

        return res.send(false)

    })
}

exports.get_user = (req, res) => {
    User.findById(req.params.id).exec((err, result) => {
        if (err) return res.status(500).send(err)

        if (result) return res.send(result)

        return res.send(false)

    })
}

exports.post_user_create = (req, res) => {
    let newUser = new User({
        name: req.body.name,
        location: {
            city: req.body.city,
            address: req.body.address,
            country: req.body.country,
            state: req.body.state
        },
        username: req.body.username,
        password: req.body.password,
        birth: moment(req.body.birth, 'YYYY-MM-DD')
    })

    newUser.save(err => {
        if (err) return res.status(500).send(err)

        return res.send(newUser)
    })

    // console.log(req.body)
    // res.send(false)

}