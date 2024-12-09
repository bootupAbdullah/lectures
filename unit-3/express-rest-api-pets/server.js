// <------------------------------------------- IMPORT AND CONFIGURATION -------------------------->
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
// <------------------------------------------- DATABASE CONNECTION------------------------------->
mongoose.connect(process.env.MONGODB_URI);
// log connection status to terminal on start
mongoose.connection.on("connected", () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
  });

// <------------------------------------------- CONRTROLLERS ------------------------------------->
const petsCtrl = require("./controllers/pets")
// <------------------------------------------- MIDDLEWARE --------------------------------------->
app.use(express.json());
app.use(cors())


// !! <-----------------------------------------ROUTES -------------------------------------------->

// <---------------------------------------------- POST ROUTE --------------------------->
// #1
app.post('/pets', petsCtrl.firstCommand);

// <---------------------------------------------- POST ROUTE --------------------------->
// #2
app.get('/pets', petsCtrl.secondCommand);

// <---------------------------------------------- DELETE ROUTE --------------------------->
// #3
app.delete('/pets/:petId', petsCtrl.thirdCommand);

// <---------------------------------------------- PUT ROUTE --------------------------->
// #4
app.put('/pets/:petId', petsCtrl.fourthCommand);


// <------------------------------------------- Start Server --------------------------------------->
app.listen(3000, () => {
  console.log('The express app is ready!');
});