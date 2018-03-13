const Schema=mongoose.Schema



const User=new Schema({
  username:String,
  password:String,
  email:String,


})

//name of the database:tracker

const User = mongoose.tracker('tracker')
