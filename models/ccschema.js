var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
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