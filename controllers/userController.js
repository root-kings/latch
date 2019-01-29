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