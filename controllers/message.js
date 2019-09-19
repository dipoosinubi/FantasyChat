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
const messageAPI = require('../models/message.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const messageRouter = express.Router({mergeParams:true})

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
//GET ALL MESSAGES
messageRouter.get('/', (req, res) => {
  messageAPI.getAllMessages(req.params.leagueId)
    .then(messages => { res.send(messages) })
})

//  GET SINGLE MESSAGE
messageRouter.get('/:messageId', (req, res) => {
  messageAPI.getMessage(req.params.messageId)
    .then(message => { res.send(message) })
})
// POST NEW MESSAGE
messageRouter.post('/', (req, res) => {
  messageAPI.addNewMessage(req.params.leagueId, req.body)
    .then((messages) => { res.send(messages) })
})
// UPDATE MESSAGE
messageRouter.put('/:messageId', (req, res) => {
  messageAPI.updateMesaage(req.params.messageId, req.body)
    .then((message) => { res.send(message) })
})
//DELETE MESSAGE
messageRouter.delete('/:messageId', (req, res) => {
  messageAPI.deleteMessage(req.params.messageId)
    .then( (message) => { res.send(message) })
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  messageRouter
}
