const express = require('express');
const app = express();

//middleware to parse JSON data
app.use(express.json());

// to track our calculator total
let total = 0;


// 1st route, endpoint: /calculator, HTTP method: GET, Response: JSON object representing current total
app.get('/calculator', (req, res) => {
    res.status(200).json({total}) // add res.status to each request, indusrty standard, enhances user experience
});


// !! expected JSON obeject: 

// {
//     "number": 5,
//     "operation": "add"
//   }
  
// the vars in this function match the 'keys' of the expected JSON object
app.post('/calculator', (req, res) => {
    const number = req.body.number;
    const operation = req.body.operation;

    if(operation === 'add') {
        total += number;
    } else if (operation === 'subtract') {
        total -= number;
    } else if (operation === 'multiply') {
        total *= number;
    } else if (operation === 'divide') {
        total /= number;
    } else {
        return res.status(400).json({error: 'Invalid opeartion'})
    }

    // return the total
    res.status(200).json({total})
})


// creatimg a DELETE route, status 204: 'no content'
app.delete('/calculator', (req, res) => {
    total = 0;
    res.status(204).json({total})
})




// app.get("/", (req, res) => {
//     res.send("Hello")
// })



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
