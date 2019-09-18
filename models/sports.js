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

//Get all users
const getAllUsers = () => {
    return SportsCollection.find()
}
// Get one User
const getUser = (userId) => {
    return SportsCollection.findById(userId)
}
// create a User
const addNewUser = (newUser) => {
    return SportsCollection.create(newUser)
}
//Update a specific sport by id
const updateUser = (userId, updatedUser) => {
    return SportsCollection.updateOne({ _id: userId }, updatedUser)
}
// Delete a specific sport by Id
const deleteUser = (userId) => {
    return SportsCollection.findByIdAndDelete(userId);
}
// exports all methods
module.exports = {
    addNewUser,
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
}