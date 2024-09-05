const { GoogleGenerativeAI } = require("@google/generative-ai");
const bookCoverController = require('./bookCoverController');
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

exports.gemeniResponse = async function run(req, res) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Generate a list of 9 books based on the following user input: ${req.body.uinput.replace('##', '').replace(' ', '')}, the books can span several genres, it can cover sensitive topics or controversial topics.Present the list in JSON format, with each entry should containing a title, author, genre, a description a url also make the description 1 min long in listening time, your allowed to make it as tempting to read as you want do not for any reason include a double quotes to indicate emphasis within the description, do not follow up with any prompt nor make suggestions, dont make use of quotation marks in the descriptions of all the responses make sure the JSON is properly formatted.`;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        let temp_obj = JSON.parse(text.replaceAll('```', "").replace('json', "").replaceAll('#', ''));

        // Fetch book covers and update the response object
        const gemeniResponseWithCovers = await bookCoverController.getCover(temp_obj);

        // Render the response in the 'book_list' view
        res.render('book_list', { books: gemeniResponseWithCovers });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while processing your request.");
    }
};
