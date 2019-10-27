/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const playerAPI = require('../models/player.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const playerRouter = express.Router({mergeParams:true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
//GET ALL PLAYERS
playerRouter.get('/', (req, res) => {
  playerAPI.getAllPlayers(req.params.leagueId)
    .then(players => { res.json(players) })
    .catch(err => console.log(err))
})

//  GET SINGLE PLAYER
playerRouter.get('/:playerId', (req, res) => {
  playerAPI.getPlayer(req.params.playerId)
    .then(player => { res.send(player) })
    .catch(err => console.log(err))
})
// POST NEW PLAYER
playerRouter.post('/', (req, res) => {
  // console.log(`${req.params}`)
  playerAPI.addNewPlayer( req.body, req.params.leagueId)
    .then((players) => { res.send(players) })
    .catch(err => console.log(err))
})
// UPDATE PLAYER
playerRouter.put('/:playerId', (req, res) => {
  playerAPI.updatePlayer(req.body,req.params.playerId )
    .then((player) => { res.send(player) })
    .catch(err => console.log(err))
})
//DELETE PLAYER
playerRouter.delete('/:playerId', (req, res) => {
  playerAPI.deletePlayer(req.params.playerId)
    .then( (player) => { res.send(player) })
    .catch(err => console.log(err))
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  playerRouter
}
