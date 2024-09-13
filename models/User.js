const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    status: { type: Boolean, default: true }, // Active/Inactive users
});

module.exports = mongoose.model('User', userSchema);
