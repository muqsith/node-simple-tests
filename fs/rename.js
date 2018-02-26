const fs = require('fs-extra'),
    path = require('path')
    ;

function rename(_dir, oldname, newname) {
    return (
        new Promise((resolve, reject) => {
            if (!fs.existsSync(path.resolve(_dir, oldname))) {
                reject(new Error(`File doesn't exist`));
            }
            fs.rename(path.resolve(_dir, oldname), path.resolve(_dir, newname), (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        })
    );
}

let nextIndex = 31;

function renameFiles(_dir, files) {
    let file = files.shift();
    if (file) {
        rename(_dir, file, `${nextIndex++}.jpg`)
        .finally(() => { renameFiles(_dir, files); });
        ;
    }
}

if (require.main === module) {
    let _dir = path.resolve('/home/muqsith/Pictures/kukuclocks');
    fs.readdir(_dir, (err, files) => {
        renameFiles(_dir, files.filter(file => file.indexOf('copy') !== -1));
    })
}
