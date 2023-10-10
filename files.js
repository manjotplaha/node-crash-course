const {FileSystem} = require('fs');


//Read File
// FileSystem.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


//Write File
// FileSystem.writeFile('./docs/blog1.txt', 'hello, wwwwworld', () => {
//     console.log('file was written');
// });

//directories
FileSystem.mkdir('./assets', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('folder created');
});

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
  }, 3000);