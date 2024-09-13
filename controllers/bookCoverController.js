
const dbConnection = require('../models/database/dbConnectionAndController');
const crypto = require('crypto');

exports.getCover = async function fetchBookCover(user_prompt, gemeniResponseObject) {
    const gemeniResponseObjectUrlIncluded = [];

    for (let index = 0; index < gemeniResponseObject.length; index++) {
        console.log(gemeniResponseObject[index]);
        const bookTitle = gemeniResponseObject[index].title.replace(/ /g, '+');
        const bookAuthor = gemeniResponseObject[index].author.replace(/ /g, '+');
        gemeniResponseObject[index].book_id = crypto.randomUUID();
        try {
            // Using the API needed for the Book cover
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
    // Here is where the db is called for saving purpose.
    await dbConnection.insertItem(user_prompt, gemeniResponseObjectUrlIncluded);
    return gemeniResponseObjectUrlIncluded;
};
