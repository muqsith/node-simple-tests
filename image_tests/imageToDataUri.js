const path = require('path'),
    fs = require('fs-extra'),
    sharp = require('sharp'),
    DataURI = require('datauri').promise
    keywords = ['blank', 'custom', 'menu', 'headers', 'team', 'timeline', 'customers', 'services', 'about', 'contact', 'introduction', 'articles', 'galleries', 'pricing tables', 'footers', 'videos'],
    category = [1,2,3,4,5,6,7,8,9,10,11],
    arr = []
    ;

const getKey = function () {
    let key = 1;
    return function() {
        let previousValue = key;
        key += 1;
        return previousValue;
    }
};

const getRandom = function (arr) {
    let result = [];
    let len = (Math.random() * ((arr.length) / 2)) | 0;
    if (!len) {
        len = 3;
    }
    for (let i = 0; i < len; i += 1) {
        let keywordIndex = (Math.random() * arr.length) | 0;
        if (result.indexOf(arr[keywordIndex]) === -1) {
            result.push(arr[keywordIndex]);
        }
    }
    return result;
}

function getMetaData(imagefile) {
    return (
        new Promise((resolve, reject) => {
            let image = sharp(imagefile);
            return image.metadata()
            .then((metadata) => {
                return resolve(Object.assign({}, 
                    {
                        format: metadata.format,
                        width: metadata.width,
                        height: metadata.height
                    }
                ));
            })
            .catch((err) => {
                let errorMessage = `Unable to read image metadata: ${getErrorString(err)}`;
                LOG.error(errorMessage);
                return reject(new Error(errorMessage));
            });
        })
    );
}

function getImages(dirName) {
    return (
        new Promise((resolve, reject) => {
            fs.readdir(dirName, (err, files) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(files.map(file_name => path.resolve(dirName, file_name)));
                }
            })
        })
    );
}

function processImages(imageFiles) {
    return (
        new Promise((resolve, reject) => {
            let imageFile = imageFiles.shift();
            if (imageFile) {
                let o = {}, meta;
                return getMetaData(imageFile)
                .then((_meta) => {
                    meta = _meta;
                    return DataURI(imageFile);
                })
                .then((dataUri) => {
                    o.src = dataUri;
                    o.height = meta.height;
                    o.id = getKey();
                    o.keywords = getRandom(keywords);
                    o.category = category[(Math.random() * category.length) | 0];
                    arr.push(o);
                    return processImages(imageFiles).then(resolve).catch(reject);
                })
                .catch((err) => {
                    return processImages(imageFiles).then(resolve).catch(reject);
                })
            } else {
                return resolve();
            }
        })
    );    
}

getImages(path.resolve(__dirname, 'generated_images'))
.then((files) => {
    return processImages(files);
})
.then(() => {
    console.log(`
        window.genericBlocks = ${JSON.stringify(arr)} ;
    `);
})
.catch((err) => {
    console.log(err);
});
