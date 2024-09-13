const gemeniController = require('./gemeniController');
const stringSimilarity = require("string-similarity");
const connectToDB = require('../models/database/dbConnectionAndController');

module.exports.userInputSimilarity = async function userInputSimilarityTest(req, res) {
    try {
        const retObj = await connectToDB.fetchAllBooks();
        const matchingBooks = [];

        const user_prompt = `${req.body.uinput.replace('##', '')}`;

        for (let i = 0; i < retObj.length; i++) {
            const similarityScore = stringSimilarity.compareTwoStrings(retObj[i].prompt, user_prompt);
            console.log(`${user_prompt} VS ${retObj[i].prompt} = ${similarityScore}`);

            if (similarityScore >= 0.59) {
                matchingBooks.push(retObj[i]);
            }
        }

        console.log('Books to render:', matchingBooks);

        if (matchingBooks.length > 0) {
            res.render('book_list', { books: matchingBooks });
        } else {
            gemeniController.gemeniResponse(req, res);
        }
    } catch (error) {
        console.error("Error in userInputSimilarity:", error);
        res.status(500).send("Internal Server Error");
    }
};
