console.log("Hello Class")

// I am creating a funtion
// function nameGenerator(name){
//     console.log(`Hello ${name}`)
// }

// I am writing a second function
// function printBanner(){
//     console.log('=======================');
//     console.log('Insert Banner Text Here')
//     console.log('=======================');
// }
// printBanner();


// function nameGenerator(name){
//     console.log(`Hello ${name}`)
// }
// nameGenerator("Abdullah");
// nameGenerator("Variable");
// nameGenerator("Captain Crunch");

// I am creating function with multiple parameters
function nameGenerator(student1, student2, student3){
    console.log(`Hello ${student1}, ${student2}, ${student3}!`)
}
nameGenerator("Abdullah", "Rolio", "Sam");

// this is a function that adds two numbers
function addNums(a,b){
    let sum = a + b;
    console.log(sum)
};

addNums(12,2);

//i am creating function that prints true if partiular criteria is met

function planetHasWater(planet){
    if (planet.toLowerCase() === 'earth' || planet.toLowerCase() === 'mars'){
        console.log('true')
    } else {
        console.log('false')
    }
}

planetHasWater('Earth');   // should print true
planetHasWater('Venus');   // should print false
planetHasWater('Mars');    // should print true
planetHasWater('Jupiter'); // should print false


// You Do, arrow function expressions

const square = (num) => {
    return num * num;    
}
console.log(square(8))


 // I am copying and pasting a snippet of code from 'You Do, arrow function expressions'
  const sumTwoNumbers = (numA, numB) => {
    return numA + numB;
  }
  
const sum = sumTwoNumbers(5, 10);

console.log(sum)
  
// practicing arrow function expressions, made my own:

const myfeelings = (feeling) => {
    return `I am feeling ${feeling}.`
}

console.log(myfeelings('overwhelmed'))

// next code block from 'You Do', arrow function expressions

const emphasize = (str) => {
  return `${str} ${str}!`;
}

reallyEmphaseized  = emphasize('really');



console.log(reallyEmphaseized)