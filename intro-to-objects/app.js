// I am creating an obeject called 'me'


// const me = {
//     firstName: 'Abdullah',
//     age: 36,
//     hasHome : true,
//     greet: () => {
//         console.log('hi')
//     },
//     stuff:['home', 'family', 'computer'],
//     daughter: {
//         firstName:"Vivienne",
//         age: 7
//     }
// }

// console.log(me.daughter)
// console.log(me.stuff[1])

// console.log(me)
// console.log(me.firstName)
// me.firstName = 'Abdullah1'
// me.lastName = 'Durrani'
// console.log(me)

// delete me.hasHome
// console.log(me)

const pets = [
    {firstName: 'fido'},
    {firstName: 'princes'},
    {firstName: 'nemo'}
]

console.log(pets[1].firstName)
console.log()

for (let currentPet of pets){
    console.log(currentPet)
    console.log(currentPet.firstName)
}