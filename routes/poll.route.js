// const ObjectId = require('mongodb').ObjectId
const handlePoll = require('../controllers/poll.controller')

module.exports = (app) => {
  app.route('/api/poll')
    .get((req, res) => {
      handlePoll.getAllPolls()
      .then((polls) => {
        res.json(polls)
      })
      .catch((err) => console.log(err))
    })
    .post((req, res) => {
     handlePoll.postPoll(req.body)
     .then(poll => {
     	res.json(poll)
     })
     .catch(err => console.log(err))
    })

    app.route('/api/poll/:id')
    .get((req, res) => {
      id = req.params.id
      handlePoll.getOnePoll(id)
      .then((poll) => {

        res.json(poll)
      })
      .catch((err) => console.log("ERREUR...", err))
    })
    .put((req, res) => {
      id = req.params.id
      handlePoll.updatePoll(id, req.body)
      .then((poll) => {
        res.json({message: 'poll modifiée avec succès', poll: poll})
      })
    })
    .delete((req, res) => {
      id = req.params.id
      handlePoll.deletePoll(id)
      .then((poll) => {
        res.json({message: 'poll supprimée avec succès'})
      })
    })

    app.route('/api/poll/:id/:index')
    .put((req, res) => {
      id = req.params.id
      // id2 = req.params.id2
      handlePoll.updateVote(id, req.body)
      .then((poll) => {
        res.json(poll)
      })
      .catch((err) => console.log("ERREUR...", err))
    })

    app.route('/api/mypoll/:parame')
    .get((req, res) => {
      console.log(req.ip)
      handlePoll.getSomePolls(req.params.parame)
      .then((polls) => {
        res.json(polls)
      })
      .catch((err) => console.log(err))
    })
}
