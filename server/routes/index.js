const User = require('../models/user')

module.exports = (app) => {
  app.post('/login', function (req, res) {
    var request = req.body
    var obj = { username: request.username }
    User.findOne(obj, function (err, result) {
      if (err) throw err
      console.log(result)
      if (result && result.password === request.password) {
        res.send({errcode: 0, errmsg: 'ok'})
      } else {
        res.send({errcode: -1, errmsg: 'failed'})
      }
    })
  })
}
