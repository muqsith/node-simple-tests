const getSslCert = require('get-ssl-certificate').get;

getSslCert('google.com')
.then((result) => {
    console.log(result);
})
