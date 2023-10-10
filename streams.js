const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog1.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog2.txt');

// readStream.on('data', (chunk) => {
//     console.log('----NEW CHUNK----');
//     console.log(chunk.toString());
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk);
// });

// piping => shortcut of the abobove
readStream.pipe(writeStream);