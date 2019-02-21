// const ObjectId = require('mongodb').ObjectId
const handleUser = require('../controllers/user.controller')

module.exports = (app) => {
  app.route('/api/user')
    .get((req, res) => {
      handleUser.getAllUsers()
      .then((users) => {
        res.send(users)
      })
      .catch((err) => console.log(err))
    })
    .post((req, res) => {
     handleUser.postUser(req.body)
     .then(user => {
     	res.send(user)
     })
     .catch(err => console.log(err))
    })

    app.route('/api/user/:id')
    .get((req, res) => {
      id = req.params.id
      handleUser.getOneUser(id)
      .then((user) => {

        res.send(user)
      })
      .catch((err) => console.log(err))
    })

    .put((req, res) => {
      id = req.params.id
      handleUser.updateUser(id, req.body)
      .then((user) => {
        res.json({message: 'user modifiée avec succès', user: user})
      })
    })

    .delete((req, res) => {
      id = req.params.id
      handleUser.deleteUser(id)
      .then((user) => {
        res.json({message: 'user supprimée avec succès'})
      })
    })
}
