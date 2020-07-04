const mongoose = require('mongoose');

const PostNews = mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('PostNews', PostNews);