const mongoose = require('mongoose');

const fineSchema = new mongoose.Schema({
    transactionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' },
    fineAmount: { type: Number, default: 0 },
    isPaid: { type: Boolean, default: false }
});

module.exports = mongoose.model('Fine', fineSchema);
