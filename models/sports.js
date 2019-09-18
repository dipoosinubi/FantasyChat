//Sport model
const mongoose = require('./connection.js')


//create schema for each sport
const SportsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: "NFL"
    },
    description: {
        type: String,
        default: "National Football League",
    },
    leagues: [leagues]
})
//Name of the collection that stores sport information
const SportsCollection = mongoose.model('sport', SportsSchema);

//Get all sports
const getAllSports = () => {
    return SportsCollection.find()
}
// Get one sport
const getSport = (sportId) => {
    return SportsCollection.findById(sportId)
}
// create a sport
const addNewSport = (newSport) => {
    return SportsCollection.create(newSport)
}
//Update a specific sport by id
const updateSport = (sportId, updatedSport) => {
    return SportsCollection.updateOne({ _id: sportId }, updatedSport)
}
// Delete a specific sport by Id
const deleteSport = (sportId) => {
    return SportsCollection.findByIdAndDelete(sportId);
}
// exports all methods
module.exports = {
    addNewSport,
    deleteSport,
    getAllSports,
    getSport,
    updateSport
}