//User model
const mongoose = require('./connection.js')

//create schema for each user
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    default: "Ballers"
  },
  message: {
    type: String,
    default: "Can we trade ",
  }
})
//Name of the collection that stores user information
const UserCollection = mongoose.model('user', UserSchema);

//Get all users
const getAllUsers = () => {
  return UserCollection.find()
}
// Get one User
const getUser = (userId) => {
  return UserCollection.findById(userId)
}
// create a User
const addNewUser = (newUser) => {
  return UserCollection.create(newUser)
}
//Update a specific user by id
const updateUser = (userId, updatedUser) => {
  return UserCollection.updateOne({_id:userId}, updatedUser)
}
// Delete a specific user by Id
const deleteUser = (userId) => {
  return UserCollection.findByIdAndDelete(userId);
}
// exports all methods
module.exports = {
  addNewUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser
}
