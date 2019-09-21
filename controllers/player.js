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
//GET ALL MESSAGES
playerRouter.get('/', (req, res) => {
  playerAPI.getAllPlayers(req.params.leagueId)
    .then(messages => { res.send(messages) })
})

//  GET SINGLE MESSAGE
playerRouter.get('/:messageId', (req, res) => {
  playerAPI.getPlayer(req.params.messageId)
    .then(player => { res.send(player) })
})
// POST NEW MESSAGE
playerRouter.post('/', (req, res) => {
  console.log(req.params)
  playerAPI.addNewPlayer(req.params.leagueId, req.body)
    .then((messages) => { res.send(messages) })
})
// UPDATE MESSAGE
playerRouter.put('/:messageId', (req, res) => {
  playerAPI.updatePlayer(req.params.messageId, req.body)
    .then((player) => { res.send(player) })
})
//DELETE MESSAGE
playerRouter.delete('/:messageId', (req, res) => {
  playerAPI.deletePlayer(req.params.messageId)
    .then( (player) => { res.send(player) })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  playerRouter
}
