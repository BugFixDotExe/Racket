
const dbConnection = require('../models/database/dbConnectionAndController');
const crypto = require('crypto');

exports.getCover = async function fetchBookCover(gemeniResponseObject) {
    const gemeniResponseObjectUrlIncluded = [];

    for (let index = 0; index < gemeniResponseObject.length; index++) {
        const bookTitle = gemeniResponseObject[index].title.replaceAll(' ',  '+');
        const bookAuthor = gemeniResponseObject[index].author.replaceAll(' ',  '+');
        gemeniResponseObject[index].book_id = crypto.randomUUID();
        try {
            // Fetchin the API needed for the Book cover
            const bookCoverUrl = `https://bookcover.longitood.com/bookcover?book_title=${bookTitle}&author_name=${bookAuthor}`;
            const gotResponse = await fetch(bookCoverUrl);

            if (!gotResponse.ok) {
                throw new Error(`Error Status ${gotResponse.status}`);
            }

            const bookCoverJSON = await gotResponse.json();
            gemeniResponseObject[index].url = bookCoverJSON.url;

        } catch (error) {
            console.error(error);
        }
        gemeniResponseObjectUrlIncluded.push(gemeniResponseObject[index]);
    }
    await dbConnection.insertItem(gemeniResponseObjectUrlIncluded);
    return gemeniResponseObjectUrlIncluded;
};
