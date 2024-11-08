// import express
const express = require('express');
// create express app
const app = express();


const PORT = 3000;

//root path '/'
app.get('/', (req, res) => {
    res.send("<h1>Welcome to my Express App!</h1?")
});

// About page -> /about
app.get('/About', (req, res) => {
    res.send("<h1>About Page!</h1?")
});


// define 'search' as stand alone route -> '/search'
app.get('/search', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Welcome to my express app ${name}! I hear you are ${age} years`)
});

// Product Page -> /product
app.get('/product', (req, res) => {
    res.send('<h2>Product Page</h2>')
});

// product Page/Product by ID  -> will load prouct by 'productID'

app.get('/product/:productId', (req, res) => {
    res.send(`<h1>Product Id:${req.params.productId} </h1>`)
});


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
});

