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
const leagueAPI = require('../models/league.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const leagueRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
//GET ALL LEAGUES 
leagueRouter.get('/', (req, res) => {
  leagueAPI.getAllLeagues()
    .then(leagues => { res.send(leagues) })
})

//  GET SINGLE GROUP
leagueRouter.get('/:leagueId', (req, res) => {
  leagueAPI.getLeague(req.params.leagueId)
    .then(league => { res.send(league) })
})
// POST NEW LEAGUES 
leagueRouter.post('/', (req, res) => {
  leagueAPI.addNewLeague(req.body)
    .then((leagues) => { res.send(leagues) })
})
// UPDATE LEAGUES 
leagueRouter.put('/:leagueId', (req, res) => {
  leagueAPI.updateLeague(req.params.leagueId, req.body)
    .then((league) => { res.send(league) })
})
//DELETE LEAGUES  
leagueRouter.delete('/:leagueId', (req, res) => {
  leagueAPI.deleteLeague(req.params.leagueId)
    .then( (leagues) => { res.send(leagues) })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  leagueRouter
}