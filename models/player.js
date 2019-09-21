//Player model
const mongoose = require('./connection.js')
const ObjectId = mongoose.Schema.Types.ObjectId


//create schema for each player
const PlayerSchema = new mongoose.Schema({
  leagueId: {
     type: String,
     require: true,
  },
  teamName: {
    type: String,
    require: true,
    default: "Issa Team"
  },
  name: {
    type: String,
    default: "Preston Turner",
  },
})
//Name of the collection that stores player information
const PlayerCollection = mongoose.model('player', PlayerSchema);

//Get all for players for one league
const getAllPlayers = (id) => {
  return PlayerCollection.find({leagueId: id})
}
// Get one Player
const getPlayer = (playerId) => {
  return PlayerCollection.findById(playerId)
}
// create a Player
const addNewPlayer = (leagueId, newPlayer) => {
  newPlayer.leagueId = leagueId
  return PlayerCollection.create(newPlayer)
}
//Update a specific player by id
const updatePlayer = (playerId, updatedUser) => {
  return PlayerCollection.updateOne({_id:playerId}, updatedUser)
}
// Delete a specific player by Id
const deletePlayer = (playerId) => {
  return PlayerCollection.findByIdAndDelete(playerId);
}
// exports all methods
module.exports = {
  addNewPlayer,
  deletePlayer,
  getAllPlayers,
  getPlayer,
  updatePlayer
}
