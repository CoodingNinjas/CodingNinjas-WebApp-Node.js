require('dotenv').config();

const pages = process.env.PAGES;
const user = process.env.USER;
const title = process.env.TITLE;

// user
module.exports.user_home = (req, res) => {
    res.render(`${pages}/${user}/home`, {
        title: `Home | ${title}`,
        layout: './layout/main',
        // page: member
    });
}
