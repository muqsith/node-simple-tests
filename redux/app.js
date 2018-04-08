const path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    init = require('./init'),
    { closeConnection } = require('./mongo-client')
    ;

init()
.then(() => {
    const PORT = 9595;

    const app = express();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    app.use('/api', require('./api'));

    app.use('/', express.static(path.resolve(__dirname, 'public')));

    app.use((err, req, res, next) => {
        res.status(500).send(err.message);
    });

    app.listen(PORT, (err) => {
        if (err) {
            console.error('Error occured: ', err);
        } else {
            console.log(`Listening : http://localhost:${PORT}/`);
        }
    });

    console.log('App initialized successfully ');
})
.catch((err) => {
    closeConnection();
    console.log('App initialization failed');
})
