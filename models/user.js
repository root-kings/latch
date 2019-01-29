var mongoose = require('mongoose')
var Schema = mongoose.Schema
var moment = require('moment')

var UserSchema = new Schema({
    name: {
        type: String
    },
    location: {
        city: {
            type: String
        },
        address: {
            type: String
        },
        country: {
            type: String
        },
        state: {
            type: String
        }
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    documents: [{
        name: {
            type: String
        },
        date: {
            type: Date
        },
        image: {
            data: {
                type: Buffer
            },
            mimetype: {
                type: String
            }
        }
    }]
}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
})




module.exports = mongoose.model('User', UserSchema)