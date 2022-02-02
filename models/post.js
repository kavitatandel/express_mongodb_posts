// models/post.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const postSchema = new Schema({
    title: { type: String, required: true }, // String is shorthand for {type: String}
    author: String,
    body: String,
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema); //Post is the name of the collection