require('dotenv').config();

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