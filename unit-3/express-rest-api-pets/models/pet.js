// <------------------------------------------- Imports and Configuration ------------------------------->
const  mongoose = require ('mongoose');
// <------------------------------------------- Schemas ------------------------------------------------->
const petSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
})
// <------------------------------------------- Model ---------------------------------------------------->
const Pet = mongoose.model('Pet', petSchema);
// <------------------------------------------- Export ------------------------------------------------------>
module.exports = Pet;