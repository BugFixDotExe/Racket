const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        book_id: {
            type: String,
            required: true,
        },
        bookTitle: {
            type: String,
            required: true,
        },
        bookAuthor: {
            type: String,
            required: true,
        },
        bookDescription: {
            type: String,
            required: true,
        },
        bookCoverURL: {
            type: String,
            required: true,
        },
    })

module.exports = mongoose.model('bookSchema', bookSchema);
