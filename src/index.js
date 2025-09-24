const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars'); // import đúng cách

const app = express();
const port = 3000;

// Middleware log
app.use(morgan('combined'));

// Cấu hình handlebars
app.engine('hbs', engine({ extname: '.hbs' })); // đặt phần mở rộng là .hbs
app.set('view engine', 'hbs');
app.set('views', './views'); // thư mục chứa file .handlebars
app.set('views', path.join(__dirname, '/resources/views'));
// console.log('PATH', path.join(__dirname, '/resources/views'));

app.get('/news', (req, res) => {
    res.render('news');
});

// Start server
app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
