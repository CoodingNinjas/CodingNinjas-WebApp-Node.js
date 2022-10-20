require('dotenv').config();
const User = require('../models/userModels');

const title = process.env.TITLE;

// login get
module.exports.login_get = (req, res) => {
    res.render('auth/login', {
        title: `Login | ${title}`,
    });
}

// registration get
module.exports.registration_get = (req, res) => {
    res.render('auth/registration', {
        title: `Registration | ${title}`,
    });
}
// registration post
module.exports.registration_post = (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        date: req.file.filename
    });
    user.save((err) => {
        if(err){
            res.json({message: err.message, type: 'danger'});
        }else{
            req.session.message = {
                type: 'success',
                message: 'User added successfully!'
            };
            res.redirect('/');
        }
    })
}

// reset password get
module.exports.reset_get = (req, res) => {
    res.render('auth/reset', {
        title: `Reset | ${title}`,
    });
}

// confirmation page get
module.exports.confirmation_get = (req, res) => {
    res.render('auth/confirmation', {
        title: `Confirmation | ${title}`,
    });
}