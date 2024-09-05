

exports.getCover = async function fetchBookCover(gemeniResponseObject) {
    const gemeniResponseObjectUrlIncluded = [];

    for (let index = 0; index < gemeniResponseObject.length; index++) {
        const bookTitle = gemeniResponseObject[index].title.replaceAll(' ',  '+');
        const bookAuthor = gemeniResponseObject[index].author.replaceAll(' ',  '+');

        try {
            const bookCoverUrl = `https://bookcover.longitood.com/bookcover?book_title=${bookTitle}&author_name=${bookAuthor}`;
            console.log(bookCoverUrl);
            const gotResponse = await fetch(bookCoverUrl);

            if (!gotResponse.ok) {
                throw new Error(`Error Status ${gotResponse.status}`);
            }

            const bookCoverJSON = await gotResponse.json();
            gemeniResponseObject[index].url = bookCoverJSON.url;

        } catch (error) {
            console.error(error);
        }
        console.log(gemeniResponseObject);
        gemeniResponseObjectUrlIncluded.push(gemeniResponseObject[index]);
    }
    return gemeniResponseObjectUrlIncluded;
};
