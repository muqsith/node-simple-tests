const fileReadStream = require('fs').createReadStream('../data/hamlet.xml'),
    sax = require('sax').createStream(true)
    ;

const _root = {name: 'root', parent: null, text: null, attributes: null};
let previous = _root, current = null;

sax.on('ready', () => {
    // do something on ready
});

sax.on('error', (e) => {
    console.error(e);
});

sax.on('opentagstart', (node) => {
    if (current !== null) {
        previous = { ...current };
    }
    current = {};
    current.parent = (previous) ? { ...previous } : null;
    current.name = node.name;
});

sax.on('opentag', (node) => {
    current.isSelfClosing = node.isSelfClosing;
});

sax.on('text', (text) => {
    if ((/\w+/).test(text)) {
        if (current) {
            current.text = (current.text) ? current.text +' '+ text : text;;
        } else if (previous) {
            previous.text = (previous.text) ? previous.text +' '+ text : text;
        }
    }
});

sax.on('attribute', (attr) => {
    if (!current.attributes) {
        current.attributes = [];
    }
    current.attributes.push(attr);
});

sax.on('closetag', (name) => {
    if (current && current.name === name) {
        console.log(JSON.stringify(current));
        current = null;
    } else if (previous && previous.name === name) {
        console.log(JSON.stringify(previous));
        previous = previous.parent;
    }
});

sax.on('end', () => {

});

fileReadStream.pipe(sax);