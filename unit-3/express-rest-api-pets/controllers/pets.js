// <------------------------------------------- MODEL IMPORT --------------------------------------->
const Pet = require('../models/pet');

// <------------------------------------------- POST ROUTE-------------------------------->
// #1
// HTTP POST - 
const firstCommand = async (req, res) => {
    const createdPet = await Pet.create(req.body)
    res.json(createdPet)
}

// <------------------------------------------- GET ROUTE-------------------------------->
// #2
// HTTP POST - 
const secondCommand = async (req, res) => {
    const foundPet = await Pet.find()
    res.json(foundPet)
}

// <------------------------------------------- GET ROUTE-------------------------------->
// #3
// HTTP DELETE -
const thirdCommand = async (req, res) => {
    const deletedPet = await Pet.findByIdAndDelete(req.params.petId)
    res.json(deletedPet)
}


// <------------------------------------------- GET ROUTE-------------------------------->
// #3
// HTTP UPDATE -
 const fourthCommand = async (req, res) => {
    const updatedPet = await Pet.findByIdAndUpdate(
        req.params.petId, 
        req.body, 
        {new:true}
    )
    res.json(updatedPet)
 }



// <--------------------------------------------EXPORTS ------------------------------------------------------>

module.exports = {
    firstCommand,
    secondCommand,
    thirdCommand,
    fourthCommand
}