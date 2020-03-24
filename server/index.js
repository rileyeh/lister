require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')

let { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env
let authCtrl = require('./controllers/authCtrl')

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
}).catch(err => console.log('cannot connect to database', err))

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365
    }
}))

//// Auth Endpoints ///
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/getuser', authCtrl.currentUser)


app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))