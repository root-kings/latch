const mongoose = require('mongoose')
const Schema = mongoose.Schema
const moment = require('moment')

let UserSchema = new Schema({
    name: {
        type: String
    },
    birth: {
        type: Date
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

UserSchema.virtual('age')
    .get(() => {
        return moment().diff(moment(this.birth), 'years');
    })


module.exports = mongoose.model('User', UserSchema)