const fs = require('fs')
    ;

fs.readFile('/Users/muqsithirfan/Pictures/temp/IMG_20171014_130955480.jpg', (err, buf) => {
    if (err) {
        console.log(err);
    } else {
        fs.writeFile('img.jpg', buf, 'binary', (err) => {
            if (err) {
                console.log(err);
            }
        })
    }
});