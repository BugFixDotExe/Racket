const { GoogleGenerativeAI } = require("@google/generative-ai");
const { SchemaType } = require('@google/generative-ai'); // Ensure correct import
const bookCoverController = require('./bookCoverController');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

exports.gemeniResponse = async function run(req, res) {
    const model = genAI.getGenerativeModel({
        // Using `responseMimeType` requires either a Gemini 1.5 Pro or 1.5 Flash model
        model: "gemini-1.5-flash",
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: {
                type: SchemaType.ARRAY,
                items: {
                    type: SchemaType.OBJECT,
                    properties: {
                        book_id: {
                            type: SchemaType.STRING
                        },
                        title: {
                            type: SchemaType.STRING
                        },
                        author: {
                            type: SchemaType.STRING
                        },
                        genre: {
                            type: SchemaType.STRING
                        },
                        url: {
                            type: SchemaType.STRING
                        },
                        plot: {
                            type: SchemaType.STRING
                        },
                        description: {
                            type: SchemaType.STRING
                        }
                    },
                }
            }
        }
    });

    // Construct your prompt based on the request body
    const prompt = `Generate a list of 27 books based on the following user input: ${req.body.uinput.replace('##', '')}, the books can span several genres, it can cover sensitive topics or controversial topics. Make sure to populate all fields. Make the description 3 min long in listening time, and ensure the description is enticing without including double quotes or quotation marks.`;

    try {
        // Generate content using the model
        const result = await model.generateContent(prompt);
        const response = await result.response.text();
        let books;
        try {
            books = JSON.parse(response);
        } catch (jsonError) {
            console.error('JSON Parsing Error:', jsonError);
            return res.status(500).send("Failed to parse the JSON response.");
        }

        // Fetch book covers or other additional data if needed
        const user_prompt = `${req.body.uinput.replace('##', '')}`
        const booksWithCovers = await bookCoverController.getCover(user_prompt, books);

        // Render the books list
        res.render('book_list_gemeni', { books: booksWithCovers });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).send("An error occurred while processing your request.");
    }
};
