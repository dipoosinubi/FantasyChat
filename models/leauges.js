//Group model
const mongoose = require('./connection.js')
const mongoose = require('./sports.js')

//create schema for each Group
const LeagueSchema = new mongoose.Schema({
  sportsId: [sportsId],
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
//Name of the collection that stores league information
const LeagueCollection = mongoose.model('league', LeagueSchema);

//Get all leagues
const getAllLeagues = () => {
  return LeagueCollection.find()
}
// Get one league
const getLeague = (leagueId) => {
  return LeagueCollection.findById(leagueId)
}
// create a league
const addNewLeague = (newGroup) => {
  return LeagueCollection.create(newGroup)
}
//Update a specific league by id
const updateLeague = (leagueId, updatedLeague) => {
  return LeagueCollection.updateOne({_id:leagueId}, updatedLeague)
}
// Delete a specific league by Id
const deleteGroup = (leagueId) => {
  return LeagueCollection.findByIdAndDelete(leagueId);
}
// exports all methods
module.exports = {
  addNewLeague,
  deleteGroup,
  getAllLeagues,
  getLeague,
  updateLeague
}
