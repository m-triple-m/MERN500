const { Schema, model } = require('mongoose');

const mySchema = new Schema({
    name: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true }
}, { timestamps: true });

module.exports = model('users', mySchema);