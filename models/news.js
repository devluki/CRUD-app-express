// import mongoose from 'mongoose';
var mongoose = require('mongoose');
var {
    Schema
} = mongoose;

const newsSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Content is required']
    },

    created: {
        type: Date,
        default: Date.now
    },

});



module.exports = mongoose.model('News', newsSchema)