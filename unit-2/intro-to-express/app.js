// console.log(Number.isInteger('9'))


// console.log(Number.isInteger('9') === 9)


// let stringInt = "9"

// let int = Number(stringInt)

// console.log(int)


// let stringActual = "value"

// let string = Number(stringActual)

// console.log(string)



const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

numberOfItems = 0

// console.log(collectibles[0].name)
// console.log(collectibles[0].price)

collectibles.forEach((objects) => {
    numberOfItems += 1
})

// console.log(numberOfItems)


// console.log(collectibles.length)


const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];


// app.get('/shoes/:userInput', (req, res) => {
//     if(req.params.userInput === "min-price") {

//     }
// });



// res.send(`Hello there, ${req.query.name}! I hear you are ${req.query.type} years old!`);

listOfShoes = []

shoes.forEach((item) => {
    if(item.price < 100){
        listOfShoes.push(item.name)
    }
})

console.log(listOfShoes)
