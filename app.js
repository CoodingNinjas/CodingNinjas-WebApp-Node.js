// import dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');

// import routes
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 4000;


// MiddleWare
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public/'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(expressLayouts);


// View Engine
app.set('view engine', 'ejs');
app.set('layout', './layout/auth');

app.listen(PORT, () => {
    console.log('Server has started.');
});

// routes
app.use(authRoutes);