const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
    issueDate: { type: Date, required: true },
    returnDate: { type: Date, required: true },
    actualReturnDate: { type: Date },
    fineAmount: { type: Number, default: 0 },
    isReturned: { type: Boolean, default: false }
});

module.exports = mongoose.model('Transaction', transactionSchema);
