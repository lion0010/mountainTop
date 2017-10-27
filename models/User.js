let mongoose = require('mongoose');
let db = require('../config/db');

let UserSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    mail: { type: String }
});

module.exports = db.model('User', UserSchema);