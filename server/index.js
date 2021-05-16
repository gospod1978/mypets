const express = require('express')
const admin = require("firebase-admin");
const cors = require('cors')

const isAuthenticated = require('./authMiddleware')

var serviceAccount = require("./mypets-d0913-firebase-adminsdk-dy3u5-006f8ea8e7.json");

const app = express()

app.use(cors())

app.get('/', isAuthenticated, (req, res) => {
  res.json({ ok: true })
})

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

app.listen(5001, console.log.bind(console, 'Server is running...'))
