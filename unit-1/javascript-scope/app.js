
console.log(`———————————————> start of script`)
let a = 4;
console.log(`variable 'a' is created and assigned the value of ${a}.`)
console.log()

const foo = (x) => {
  console.log(`function 'foo' is created. And takes one parameter (x)`)
  let b = a * 4;
  console.log(`variable (b) is created inside of 'foo' and is assigned the value (a) * 4 which equals to: ${b}`)
  console.log()

  console.log(`a new function called 'bar' is created. it takes one parameter 'y'.`)
  console.log()
  const bar = (y) => {
    console.log(`the current value of 'b'is ${b}`)
    console.log()
    let c = y * b;
    console.log(`variable 'c' is created inside of 'bar' and assigned the value of 'b'(${b}) * 'y'(nan)`)
    return c;
    
    
  }
  
  return bar(b);
}
console.log(`———————————————> `)
console.log(`foo is returned `)  



console.log(`this is the first time the fucntion 'foo' is called`, foo(a));




// let a = 4;

// const foo = (x) => {
//   let b = a * 4;
//   console.log(`this is b:`, b)

//   const bar = (y) => {
//     let c = y * b;
//     return c;
    
//   }
//   console.log('this is c:', c)
//   return bar(b);
  
// }

// console.log('this is a, post scrpipt:', foo(a));