var mongoose = require('mongoose')
var Schema = mongoose.Schema

let Users = new Schema({
  username: String,
  email: String,
  password: String,

  messages: {
    sectionid: {
      message: {
        sendby: String,
        date: Date.now
      }
    }
  }
})

// let CCT = modules.exports = mongoose.models()