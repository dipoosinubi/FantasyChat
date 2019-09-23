//League model
const mongoose = require('./connection.js')
const ObjectId = mongoose.Schema.Types.ObjectId

//create schema for each League
const LeagueSchema = new mongoose.Schema({
  sportsId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
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
//Name of the collection that stores league information
const LeagueCollection = mongoose.model('league', LeagueSchema);

//Get all for one sport leagues
const getAllLeagues = (id) => {
  return LeagueCollection.find({sportsId: id})
}
// Get one league
const getLeague = (leagueId) => {
  return LeagueCollection.findById(leagueId)
}
// create a league
const addNewLeague = (sportsId, newSport) => {
  newSport.sportsId = sportsId
  return LeagueCollection.create(newSport)
}
//Update a specific league by id
const updateLeague = (leagueId, updatedLeague) => {
  return LeagueCollection.updateOne({_id:leagueId}, updatedLeague)
}
// Delete a specific league by Id
const deleteLeague = (leagueId) => {
  return LeagueCollection.findByIdAndDelete(leagueId);
}
// exports all methods
module.exports = {
  addNewLeague,
  deleteLeague,
  getAllLeagues,
  getLeague,
  updateLeague
}