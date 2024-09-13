const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    category: { type: String, required: true },
    availableCopies: { type: Number, default: 1 },
    procurementDate: { type: Date, required: true },
    status: { type: String, default: 'Available' }
});

module.exports = mongoose.model('Movie', movieSchema);
