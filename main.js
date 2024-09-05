const express = require('express');
const layouts = require('express-ejs-layouts');
const gemeniController = require('./controllers/gemeniController');
const bookDetail = require('./controllers/bookCoverController');
require('dotenv').config();


const app = express();

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
//app.post('/user_input', gemeniController.gemeniResponse);
/*
app.get('/book_list', bookDetail.getCompleteResponse,
        (req, res, next) => {
            console.log(req.data);
            //res.render('book_list', {books: req.data});

});*/
app.get('/book_detail', (req, res) => {
    res.render('book_detail');
});
app.get('/model', (req, res) => {
    res.render('nlp_input_processor');
});
app.listen(app.get('port'), () => {console.log(`Server running on port ${app.get('port')}`)});
