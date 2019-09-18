//Group model
const mongoose = require('./connection.js')

//create schema for each Group
const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "Fantasy 1",
  },
  description: {
    type: String,
    default: "Cool fantasy"
  },
  players:{
      type: Number,
      require: true,
      default: 10
  }
})
//Name of the collection that stores group information
const GroupCollection = mongoose.model('group', GroupSchema);

//Get all groups
const getAllGroups = () => {
  return GroupCollection.find()
}
// Get one group
const getGroup = (groupId) => {
  return GroupCollection.findById(groupId)
}
// create a group
const addNewGroup = (newGroup) => {
  return GroupCollection.create(newGroup)
}
//Update a specific group by id
const updateGroup = (groupId, updatedGroup) => {
  return GroupCollection.updateOne({_id:groupId}, updatedGroup)
}
// Delete a specific group by Id
const deleteGroup = (groupId) => {
  return GroupCollection.findByIdAndDelete(groupId);
}
// exports all methods
module.exports = {
  addNewGroup,
  deleteGroup,
  getAllGroups,
  getGroup,
  updateGroup
}
