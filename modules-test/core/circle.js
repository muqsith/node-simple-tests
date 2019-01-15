

function area(radius) {
    return (Math.PI * radius * radius).toFixed(2);
}

function diameter(radius) {
    return (2 * Math.PI * radius).toFixed(2);
}

console.log('circle module (require.main === module) check', !!(require.main === module));

module.exports = { diameter, area };

    // above and below are equal
    // exports is a special property on module object and it's value is exported to the required modules

//module.exports.diameter = diameter;
//module.exports.area = area;


// exports.area = area;
// at any time we can either use exports. or module.exports =, but not both simultaneously

// also exports and module.exports are same https://nodejs.org/dist/latest-v10.x/docs/api/modules.html#modules_exports_shortcut
