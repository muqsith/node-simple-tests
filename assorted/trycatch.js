try {
    console.log('Trying ...');
    throw new Error('Boom');
} catch (e) {
    console.log('Oh fuck');
    throw e;
} finally {
    console.log('Too late ');
}
