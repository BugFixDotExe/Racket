const { MongoClient } = require("mongodb");


const URI = 'mongodb+srv://bugfixdotexe:kotlin101%403rdworld@cluster0.5j2yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(URI);


module.exports = async function connectDB () {

    const db_name = 'racket_db';

        try {

            // Connect to the Atlas cluster

            await client.connect();

        } catch (err) {

            console.log(err.stack);

        }
        finally {

            await client.close();

        }
}

module.exports.insertItem = async function(user_prompt, objects) {
    try {
        const db = client.db("racket_db");
        const bookSchemas = db.collection("bookschemas"); // for inserting multiple single objects
        const bookCollectionsSchema = db.collection("bookObjectschema"); // for inserting an array objects tied to an id and prompt
        const result = {
            prompt: user_prompt,
            data: objects
        };
        const singleObject = await bookSchemas.insertMany(objects); // this insert multiple object one after the other individually
        const collectionObject = await bookCollectionsSchema.insertOne(result); // this inserts a collection of objects under a prompt
        console.log(`User Prompt: ${user_prompt}`);
    } catch (err) {
        console.error("Insert error:", err.stack);
    }
};

module.exports.searchItem = async function(objId) {
    try {
        const db = client.db("racket_db");
        const col = db.collection("bookschemas");

        const filter = { "book_id": `${objId}` };
        const document = await col.findOne(filter);

        console.log("Document found:\n" + JSON.stringify(document));
        return document;

    } catch (err) {
        console.error(`Search failed: ${err.stack}`);
    }
};

// once all loaded up this is used for matching prompt against users prompt
module.exports.searchAndFetchItemUsingPrompt = async function(userPrompt) {
    try {
        const db = client.db("racket_db");
        const col = db.collection("bookObjectschema");

        const filter = { "book_id": `${objId}` };
        const document = await col.findOne(filter);

        console.log("Document found:\n" + JSON.stringify(document));
        return document;

    } catch (err) {
        console.error(`Search failed: ${err.stack}`);
    }
};

// This runs on loadup.
module.exports.fetchAllBooks = async function() {
    try {
        const db = client.db("racket_db");
        const bookObjectschema = db.collection("bookObjectschema");

        const allItems = await bookObjectschema.find().toArray();
        // console.log("Document found:\n" + JSON.stringify(document));
        return allItems;

    } catch (err) {
        console.error(`Search failed: ${err.stack}`);
    }
};
