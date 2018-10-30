const express = require('express');
const app = express();

const PORT = 9445;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { config: { fruits: ['Apple', 'Banana'], veggies: ['Tomatoes', 'Potatoes'] } });
});

app.use(express.static('public'));

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error occured: ', err);
    } else {
        console.log(`Listening : http://localhost:${PORT}/`);
    }
});
