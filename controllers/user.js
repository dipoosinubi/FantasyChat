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
const userAPI = require('../models/user.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const userRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */
//GET ALL USERS
userRouter.get('/', (req, res) => {
  userAPI.getAllUsers().then(users => {
    res.send(users)
  })
})

// CREATE NEW USER
userRouter.get('/new', (req, res) => {
  res.send(newUser)
})
// EDIT USER
userRouter.get('/:userId/editUser', function (req, res) {
  userAPI.getUser(req.params.userId).then(user => {
    res.send(user)
  })
})
//  GET SINGLE USER
userRouter.get('/:userId', function (req, res) {
  userAPI.getUser(req.params.userId).then(user => {
    res.send(user)
  })
})
// POST NEW USER
userRouter.post('/user/addUser', (req, res) => {
  userAPI.addNewUser(req.body)
    .then( (users) => { res.send(users) })
})
// UPDATE NEW USER
userRouter.put('/:userId', (req, res) => {
  userAPI.updateUser(req.params.userId, req.body)
    .then( (user) => { res.send(user) })
})
//DELETE USER
userRouter.delete('/:userId', (req, res) => {
  userAPI.deleteUser(req.params.userId).then(res.send(users))
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  userRouter
}
