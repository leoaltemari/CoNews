const mongoose = require('mongoose');

const PostHelp = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true,
        unique: true
    },
    link: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('PostHelp', PostHelp);