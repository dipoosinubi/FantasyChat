/* 
 * This is the template for a server.js file.  Follow the steps below and read
 * the comments for creating your own (or you can just copy this file).
 */

/* Step 1
 *
 * Import needed packages
 *
 */
const express = require('express')
const app = express()
// const methodOverride = require('method-override')

/* Step 2
 * 
 * import routers from controllers/
 *
 */
const { leagueRouter } = require('./controllers/league.js')
const { playerRouter }   = require('./controllers/player.js')
const { sportRouter }  = require('./controllers/sport.js')
// const { playerRouter} = require()


/* Step 3
 *
 * Register middleware...
 */

/* Step 3.a
 * ...to parse the body of the HTTP requests from a URL encoded string 
 */
app.use(express.urlencoded({extended: true}))

/* Step 3.b 
 *
 * ...to parse the body of the HTTP requests from a JSON string  
 */
app.use(express.json({strict:false}))

// app.use(methodOverride('_method'))
/* Step 3.c
 *
 * use the `./client/build` directory to host static resources such as css and
 * image files 
 */
app.use(express.static(`${__dirname}/client/build`))
app.use(express.static(__dirname+"/public"))

/* Step 4
 *
 * add router for the application to use. The first argument is a prefix to all
 * the paths defined in the router.
 */
app.use('/api/sports', sportRouter)
app.use('/api/sports/:sportId/leagues', leagueRouter)
app.use('/api/sports/:sportId/leagues/:leagueId/players', playerRouter)

/* Step 5
 *
 * add catch all route to serve up the built react app for any request not made to our
 * /api/... routes.
 */
app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

/* Step 6
 *
 * Set the port the server is to run on
 *
 * NOTE: keep these lines at the bottom of the file 
 */
const PORT = process.env.PORT || 3001

/* Step 7
 *
 * Start the server
 */
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})
