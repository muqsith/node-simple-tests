

function _spacer(millis, message) {
    console.log(`You said ${message} at [${millis()}]`);
}


const spacer = _spacer.bind(null, Date.now)

module.exports = spacer;
