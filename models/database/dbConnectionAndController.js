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

module.exports.insertItem = async function(objects) {
    try {
        const db = client.db("racket_db");
        const col = db.collection("bookschemas");

        const result = await col.insertMany(objects);
        console.log(`${result.insertedCount} documents were inserted`);
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
