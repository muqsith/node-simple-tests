// Newton-Raphson method
// https://en.wikipedia.org/wiki/Newton%27s_method#Square_root_of_a_number

const g = (x, y) => x - ((x * x) - y) / (2 * x);

const sqrt = (n, guess = 1) => {
	let previous = guess, current = 0, diff = guess;
	do {
		current = g(previous, n);
		diff = current - previous;
		diff = +(diff.toFixed(8));
		//console.log('Prev: ', previous, ', Curr: ', current, ', Diff: ', diff);
		previous = current;
	} while(!isNaN(diff) && diff !== 0);
	return previous;
};

if (exports.main === module) {
    console.log(sqrt(2), Math.sqrt(2));
} else {
    module.exports = sqrt;
}
