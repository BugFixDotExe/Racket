const express = require('express');
const layouts = require('express-ejs-layouts');
const crypto = require('crypto');

const gemeniController = require('./controllers/gemeniController');
const bookDetail = require('./controllers/bookCoverController');
const connectToDB = require('./models/database/dbConnectionAndController');
require('dotenv').config();


const app = express();
// Connect to DB
connectToDB.connectDB;

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);
app.use(layouts);
app.set("port", process.env.PORT || 5000);

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static('public'));



// Routes
app.get('/', (req, res) => {
    res.render('index');                                        
});
app.post('/user_input', gemeniController.gemeniResponse);


app.get('/book_detail/:id', async (req, res) => {
    try {
        // Await the result of the database search
        const foundObj = await connectToDB.searchItem(req.params.id);

        // If the book is found, render the book detail page
        if (foundObj) {
            res.render('book_detail', { book: foundObj });
        } else {
            // Handle case where the book is not found
            res.status(404).send("Book not found");
        }
    } catch (err) {
        // Handle any errors that occur during the search
        console.error("Error fetching book details:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/model', (req, res) => {
    res.render('nlp_input_processor');
});

app.listen(app.get('port'), () => {console.log(`Server running on port ${app.get('port')}`)});
