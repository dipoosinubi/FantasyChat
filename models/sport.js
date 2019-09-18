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
    // leagues: [leagues]
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