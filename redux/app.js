const path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser')
    ;

const PORT = 9595;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', require('./api'));

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(PORT, (err) => {
    if (err) {
        console.error('Error occured: ', err);
    } else {
        console.log(`Listening : http://localhost:${PORT}/`);
    }
});
