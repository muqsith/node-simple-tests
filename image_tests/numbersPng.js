const path = require('path'),
  fs = require('fs-extra'),
  text2png = require('text2png'),
  numbers = require('../algo/numbers')
  ;

const pngenerator = (function () {
  let generator = {
    buf : null,
    text: null,
    generatePNG: function(text) {
      this.text = text;
      this.buf = text2png(text, {
        font: '200px Futura',
        textColor: 'teal',
        bgColor: 'linen',
        lineSpacing: 10,
        padding: 500
      });
      return this;
    },
    savePNG: function(dir, fileName) {
      return (
        new Promise((resolve, reject) => {
          fs.ensureDir(path.resolve(dir), (err) => {
            if (err) {
              reject(err);
            } else {
              fs.writeFile(path.resolve(dir, fileName+'.png'), this.buf, (err) => {
                if (err) {
                  reject(err);
                } else {
                  resolve();
                }
              })
            }
          })
        })
      );
    }
  }
  return generator;
})();


function generateNumberImages(arr) {
  let e = arr.shift();
  if (e) {
    pngenerator
    .generatePNG(numbers[e])
    .savePNG('/home/muqsith/Pictures/numbers/', e)
    .then(() => {
      generateNumberImages(arr);
    })
    .catch((err) => {
      console.log(err);
    })
  }
}


generateNumberImages(Array(60).fill(0).map((e,i) => i+1));
