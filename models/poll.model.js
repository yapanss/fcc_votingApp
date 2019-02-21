const mongoose = require('mongoose')

const pollSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  voters: [String],
  topics: [{
    title: String,
    votes: Number
  }]
})
module.exports = mongoose.model('PollModel', pollSchema)

