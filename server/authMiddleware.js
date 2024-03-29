const admin = require('firebase-admin')

function isAuthenticated(req, res, next) {
    if(!req.headers.authorization) {
        res.status(401).json({message: 'Not autorization to perform this action'})
        return
    }

    admin.auth()
        .verifyIdToken(req.headers.authorization)
        .then((decodedToken) => {
          req.user = decodedToken
          next()
        })
        .catch(err => {
          res.status(404).json({ok: false})
    })
}

module.exports = isAuthenticated