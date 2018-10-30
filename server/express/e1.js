const express = require('express'),
    app = express();

app.use((req, res, next) => {
    console.log('====> Request ...');
    debugger;    
    next();
    console.log('<==== Response ...');
});

app.get('/', (req, res) => {
    res.send({name: 'muqsith', email: 'mui@one.com'});
});

app.listen(4545, (err) => {
    if (err) {
        console.error('Error occured: ', err);
    } else {
        console.log('Listening : http://localhost:4545/');
    }
});