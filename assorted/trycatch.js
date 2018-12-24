try {
    console.log('Trying ...');
    throw new Error('Boo');
} catch (e) {
    console.log('Oh fuck');
} finally {
    console.log('Too late ');
}
