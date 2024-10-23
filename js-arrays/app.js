// const myStuff = [2, 'oh hai, Mark', true]
// console.log(myStuff)


// console.log(myStuff[1])
// console.log(myStuff.length)

// const myStuff = [2, 'oh hai, Mark', true]
// console.log(myStuff)
// myStuff[0] = 5
// console.log(myStuff)
// myStuff[1] = 'hello world!'
// console.log(myStuff)

// working on pop() for javascript

// myStuff.push('hellloooo')
// console.log(myStuff)
// myStuff.pop()
// console.log(myStuff)


// working on for loops, practice

const movies = ['Die Hard', 'Alien', 'Barbie', 'Get Out']
for (let movie of movies) {
    console.log(`I love ${movie}`)
}

// create a for loop, within the loop num is set to 0, as long num is less than 4,
// the console will log num as well as the item from the arrays 'movies' at the index
// which is set by the value of 'num'. There is also an incrimentor which adds '1' t0
// the value of 'num' for each iteration of the loop - meaning the loop will stop once
//num reaches the value of '4'

for(let num = 0; num < 4; num++) {
    console.log(num)
    console.log(movies[num])
}

console.log()

// for(let currentIndex = 0; currentIndex < 4; currentIndex++){
//     console.log(movies[currentIndex])
// }