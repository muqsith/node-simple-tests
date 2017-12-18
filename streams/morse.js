const { Transform } = require('stream')
    ;

const MORSE_CODE = {
    a: '.-', b: '-...', c: '-.-.', d: '-..',
    e: '.', f: '..-.', g: '--.', h: '....', i: '..',
    j: '.---', k: '-.-', l: '.-..', m: '--',
    n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.',
    s: '...', t: '-', u: '..-', v: '...-', w: '.--',
    x: '-..-', y: '-.--', z: '--..', 1: '.----', 2: '..---',
    3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...',
    8: '---..', 9: '----.', 0: '-----'
};

class Morse extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, cb) {
        let d = chunk.toString().substring(0, chunk.toString().length-1);
        let str = '';
        if (d.length) {
            str = d.split('').map((c) => {
                return MORSE_CODE[c];
            }).join(' ');
        }
        this.push(str+'\n');
        cb();
    }
}

let morse = new Morse();

process.stdin.pipe(morse).pipe(process.stdout);
