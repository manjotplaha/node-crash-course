// const name = 'mario';

// console.log(name);

// const greet = (name) => {
//   console.log(`hello, ${name}`);
// }

// greet('mario');
// greet('yoshi');

// console.log(global);

console.log(__dirname);
console.log(__filename);

setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int);
}, 3000);