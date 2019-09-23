//Sport model
const mongoose = require('./connection.js')


//create schema for each sport
const SportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "NFL"
    },
    description: {
        type: String,
        default: "National Football League",
    },
    image:{
        type: String,
        require:true,
        default: "https://images.unsplash.com/photo-1543351611-58f69d7c1781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    }
})
//Name of the collection that stores sport information
const SportCollection = mongoose.model('sport', SportSchema);

//Get all sports
const getAllSports = () => {
    return SportCollection.find()
}
// Get one sport
const getSport = (sportId) => {
    return SportCollection.findById(sportId)
}
// create a sport
const addNewSport = (newSport) => {
    return SportCollection.create(newSport)
}
//Update a specific sport by id
const updateSport = (sportId, updatedSport) => {
    return SportCollection.updateOne({ _id: sportId }, updatedSport)
}
// Delete a specific sport by Id
const deleteSport = (sportId) => {
    return SportCollection.findByIdAndDelete(sportId);
}
// exports all methods
module.exports = {
    addNewSport,
    deleteSport,
    getAllSports,
    getSport,
    updateSport
}