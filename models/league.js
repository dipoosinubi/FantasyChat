//League model
const mongoose = require('./connection.js')

//create schema for each League
const LeagueSchema = new mongoose.Schema({
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
  },
  sportId: {
    type: mongoose.Types.ObjectId
  },
})
//Name of the collection that stores league information
const LeagueCollection = mongoose.model('league', LeagueSchema);

//Get all for one sport league
const getAllLeagues = (sportId) => {
  return LeagueCollection.find({sportId: sportId})
}
// Get one league
const getLeague = (leagueId) => {
  return LeagueCollection.findById(leagueId)
}
// create a league by sportId
const addNewLeague = ( newLeague,sportId ) => {
  newLeague.sportId = sportId
  return LeagueCollection.create(newLeague)
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