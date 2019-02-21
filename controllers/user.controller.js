const User = require('../models/user.model')

module.exports = {
  getAllUsers : () => {
   return new Promise((resolve, reject) => {
    User.find({}, (err,users) => {
      if(err) {
        reject(err)
      } else{
        resolve(users)
      }
    })
   })
  },

  postUser : (body) => {
    return new Promise((resolve, reject) => {
      var user = new User(body)
      user.save((err,user) => {
      if(err) {
        reject(err)
      } else{
        resolve(user)
      }
     })
    })
  },

  getOneUser: (id) => {
    return new Promise((resolve, reject) => {
      User.findOne({_id: id}, (err, user) => {
        if(err) {
          reject(err)
        } else{
          resolve(user)
        }
      })
    }) 
  },

  updateUser: (id, newData) => {
    return new Promise((resolve, reject) => {
      User.findOneAndUpdate({
      _id: id
    },
      {$set:{
        username: newData.username,
        email: newData.email,
        password: newData.password
        }
      },
      {new:true}, 
      (err, user) => {
        if(err) {
          reject(err)
        } else{
          resolve(user)
        }
      })
    }) 
    },

  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      User.deleteOne({_id: id}, (err, user) => {
        if(err) reject(err)
          else resolve(user)
      })
    })
  }
}

