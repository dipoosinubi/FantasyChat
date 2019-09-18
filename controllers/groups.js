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
const groupAPI = require('../models/groups.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const groupRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
//GET ALL GROUPS
groupRouter.get('/', (req, res) => {
  groupAPI.getAllGroups()
    .then(groups => { res.send(groups) })
})

//  GET SINGLE GROUP
groupRouter.get('/:groupId', (req, res) => {
  groupAPI.getGroup(req.params.groupId)
    .then(group => { res.send(group) })
})
// POST NEW GROUPS
groupRouter.post('/', (req, res) => {
  groupAPI.addNewGroup(req.body)
    .then((groups) => { res.send(groups) })
})
// UPDATE GROUPS
groupRouter.put('/:groupId', (req, res) => {
  groupAPI.updateGroup(req.params.groupId, req.body)
    .then((group) => { res.send(group) })
})
//DELETE GROUPS
groupRouter.delete('/:groupId', (req, res) => {
  groupAPI.deleteGroup(req.params.groupId)
    .then( (groups) => { res.send(groups) })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  groupRouter
}