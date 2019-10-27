//Player model
const mongoose = require('./connection.js')

//create schema for each player
const PlayerSchema = new mongoose.Schema({
  teamName: {
    type: String,
    require: true,
    default: "Issa Team"
  },
  name: {
    type: String,
    default: "Preston Turner"
  },
  leagueId: {
    type: mongoose.Types.ObjectId
 },
})
//Name of the collection that stores player information
const PlayerCollection = mongoose.model('player', PlayerSchema);

//Get all for players for one league
const getAllPlayers = (leagueId) => {
  return PlayerCollection.find({leagueId: leagueId})
}
// Get one Player
const getPlayer = (playerId) => {
  return PlayerCollection.findById(playerId)
}
// create a Player
const addNewPlayer = (newPlayer,leagueId) => {
  newPlayer.leagueId = leagueId
  return PlayerCollection.create(newPlayer)
}
//Update a specific player by id
const updatePlayer = (playerId, updatedPlayer) => {
  return PlayerCollection.updateOne({_id:playerId}, updatedPlayer)
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
