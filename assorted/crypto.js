const crypto = require('crypto');

const cipher = (data, algo, secret) => {
    const cipher = crypto.createCipher(algo, secret);
    let crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
};

const decipher = (data, algo, secret) => {
    const decipher = crypto.createDecipher(algo, secret);
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return JSON.parse(decrypted);
};

console.log(cipher(JSON.stringify({shopId: '518ea6a0-ec89-49fa-83bf-707078dcfd8b', orderId: 'cb46660f-220e-4775-8a30-4e651d7e1acb'}),
    'aes128', 'xyz'));

const encrypted = '475e10d7999012ff92e8e11159e684a05f87e8d5ca2a92ea6c9096bea0dea52351353d3d461842b2de5204213483382af2274d0cb697c169470408ad060a107775a4e3df93b3949115d0392e554695ea964635f0c0fbadf9050fc53c36f61feccbfc68361814913ef0dabacca962dc54';

console.log(decipher(encrypted, 'aes128', 'xyz'));
