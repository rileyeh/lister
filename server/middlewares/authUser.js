module.exports = function(req, res, next) {
    if (req.session.user) {
        next()
    } else {
        res.status(401).send('you need to be signed in to view this content')
    }
}