//Message model
const mongoose = require('./connection.js')
const ObjectId = mongoose.Schema.Types.ObjectId


//create schema for each message
const MessageSchema = new mongoose.Schema({
  leagueId: {
     type: String,
     require: true,
  },
  userName: {
    type: String,
    require: true,
    default: "Ballers"
  },
  message: {
    type: String,
    default: "Can we trade ",
  },
})
//Name of the collection that stores message information
const MessageCollection = mongoose.model('message', MessageSchema);

//Get all for messages for one league
const getAllMessages = (id) => {
  return MessageCollection.find({leagueId: id})
}
// Get one Message
const getMessage = (messageId) => {
  return MessageCollection.findById(messageId)
}
// create a Message
const addNewMessage = (leagueId, newMessage) => {
  newMessage.leagueId = leagueId
  return MessageCollection.create(newMessage)
}
//Update a specific message by id
const updateMesaage = (messageId, updatedUser) => {
  return MessageCollection.updateOne({_id:messageId}, updatedUser)
}
// Delete a specific message by Id
const deleteMessage = (messageId) => {
  return MessageCollection.findByIdAndDelete(messageId);
}
// exports all methods
module.exports = {
  addNewMessage,
  deleteMessage,
  getAllMessages,
  getMessage,
  updateMesaage
}
