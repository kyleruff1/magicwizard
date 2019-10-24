// Loading evnironmental variables here
	
​
require('dotenv').config()
​
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./server/db') // loads our connection to the mongo database
const passport = require('./server/passport')
const app = express()
const PORT = process.env.PORT || 3001
​
// if (process.env.NODE_ENV !== 'production') {
// 	app.use(express.static("client/build"));
// 	app.use(express.static("public"));
// }
​
app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
​
// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
mongoose.connect(process.env.MONGODB_URI ||
    "mongodb://magicman:Passw0rd@ds337418.mlab.com:37418/heroku_phpx6jhv");
​
app.listen(PORT, function () {
    console.log(`🌎 ==> API Server now listening on PORT http//localhost:${PORT}`);
});
​
// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser
​
// ===== testing middleware =====
// app.use(function(req, res, next) {
// 	console.log('===== passport user =======')
// 	console.log(req.session)
// 	console.log(req.user)
// 	console.log('===== END =======')
// 	next()
// })
// testing
// app.get(
// 	'/auth/google/callback',
// 	(req, res, next) => {
// 		console.log(`req.user: ${req.user}`)
// 		console.log('======= /auth/google/callback was called! =====')
// 		next()
// 	},
// 	passport.authenticate('google', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect('/')
// 	}
// )
​
// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '../build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
}
​
/* Express app ROUTING */
app.use('/auth', require('./server/auth'))
​
// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})
​
// ==== Starting Server =====
// app.listen(PORT, () => {
// 	console.log(`App listening on PORT: ${PORT}`)
// })