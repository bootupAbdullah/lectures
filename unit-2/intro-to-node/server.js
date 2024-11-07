const multiply = (a, b) => {
    return a * b;
};

const product = multiply(5, 8);

// console.log(product);

const fs = require('fs')

// fs.writeFile('hello.txt', 'hello, friend', () => {
//     console.log('done creating file');
// } )

const validator = require('validator');


// console.log(validator.isEmail('test@example.com'));
// console.log(validator.isEmail('not-an-email'));
console.log(validator.isUppercase('HI THERE'));
console.log(validator.isUppercase('hI there'));