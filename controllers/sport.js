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
const sportAPI = require('../models/sport.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const sportRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
//GET ALL SPORTS
sportRouter.get('/', (req, res) => {
  sportAPI.getAllSports()
    .then(sports => { res.json(sports) })
})

//  GET SINGLE SPORT
sportRouter.get('/:sportId', (req, res) => {
  sportAPI.getSport(req.params.sportId)
    .then(sport => { res.send(sport) })
})
// POST NEW SPORT
sportRouter.post('/', (req, res) => {
  sportAPI.addNewSport(req.body)
    .then((sports) => { res.send(sports) })
})
// UPDATE SPORT
sportRouter.put('/:sportId', (req, res) => {
  sportAPI.updateSport(req.params.sportId, req.body)
    .then((sport) => { res.send(sport) })
})
//DELETE SPORT
sportRouter.delete('/:sportId', (req, res) => {
  sportAPI.deleteSport(req.params.sportId)
    .then( (sports) => { res.send(sports) })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  sportRouter
}
