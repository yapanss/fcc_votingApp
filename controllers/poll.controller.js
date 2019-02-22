const Poll = require('../models/poll.model')

module.exports = {
  getAllPolls : () => {
   return new Promise((resolve, reject) => {
    Poll.find({}, (err,polls) => {
      if(err) {
        reject(err)
      } else{
        resolve(polls)
      }
    })
   })
  },

  getSomePolls : (author) => {
   return new Promise((resolve, reject) => {
    Poll.find({author: author}, (err,polls) => {
      if(err) {
        reject(err)
      } else{
        resolve(polls)
      }
    })
   })
  },

  postPoll : (body) => {
    return new Promise((resolve, reject) => {
      var poll = new Poll(body)
      poll.save((err,poll) => {
      if(err) {
        reject(err)
      } else{
        resolve(poll)
      }
     })
    })
  },

  getOnePoll: (id) => {
    return new Promise((resolve, reject) => {
      Poll.findOne({_id: id}, (err, poll) => {
        if(err) {
          reject(err)
        } else{
          resolve(poll)
        }
      })
    })
  },

  updatePoll: (id, newTopic) => {
    return new Promise((resolve, reject) => {
      Poll.findOneAndUpdate({
      _id: id
    },
      {$push:{

        topics: newTopic
       }
      },
      {new:true},
      (err, poll) => {
        if(err) {
          reject(err)
        } else{
          resolve(poll)
        }
      })
    })
    },

  deletePoll: (id) => {
    return new Promise((resolve, reject) => {
      Poll.deleteOne({_id: id}, (err, poll) => {
        if(err) reject(err)
          else resolve(poll)
      })
    })
  },

  updateVote: (id, data) => {
    console.log(data)
    return new Promise((resolve, reject) => {
      Poll.findOneAndUpdate({
      _id: id
    },
      {$set:{

        topics: data.topics, voters:data.voters
       }
      },
      {new:true},
      (err, poll) => {
        if(err) {
          reject(err)
        } else{
          resolve(poll)
        }
      })
    })
    }
}


