require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const session = require('express-session')
const {authUser} = require('./middlewares/authUser')

let { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env
let authCtrl = require('./controllers/authCtrl')
let listCtrl = require('./controllers/listCtrl')

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

/// Auth Endpoints ///
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/getuser', authCtrl.currentUser)

/// List Endpoints ///
app.get('/api/lists', authUser, listCtrl.getListsByUser)
app.get('/api/lists/:id', authUser, listCtrl.getOneList)
app.get('/api/items/:id', authUser, listCtrl.getAllItemsByList)
app.put('/api/items/:id', authUser, listCtrl.markItemComplete)
app.put('/api/items/undo/:id', authUser, listCtrl.markItemIncomplete)
app.post('/api/lists', authUser, listCtrl.createList)
app.put('/api/lists/name/:id', authUser, listCtrl.updateListName)
app.post('/api/items/:id', authUser, listCtrl.createListItem)


app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))