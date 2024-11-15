const fs = require('node:fs/promises');


// fs.readFile('test.txt', 'utf8', (err, data) => {
//     console.log(data);
//     fs.readFile('test2.txt', 'utf8', (err2, data2) => {
//         console.log(data2)
//         fs.readFile('test3.txt', 'utf8', (err3, data3) => {
//             console.log(data3)
//         })
//     })
// })

const readDataFiles = async () => {
    const data = await fs.readFile('test.txt', 'utf8');
    console.log(data);
    const data2 = await fs.readFile('test2.txt', 'utf8');
    console.log(data2);
    const data3 = await fs.readFile('test3.txt', 'utf8');
    console.log(data3);
}


readDataFiles();

console.log('Run this code as soon as possible');

// const readAnotherFile = async () => {
//     try {
//         const data = await fs.readFile("test3.txt", "utf8");
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }


// readAnotherFile()


// // console.log('First')

// // setTimeout(() => {
// //     console.log('Second')
// // }, 1000)

// console.log('Third')