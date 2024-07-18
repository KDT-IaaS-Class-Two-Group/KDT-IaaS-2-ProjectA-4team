const mongoose = require('mongoose');

const userSchema = new Schema({
  name : {type : String, required : true, unique:true, trim: true},
  password : {type : String, required : true},
  
})

const User = mongoose.model('User', userSchema);

export default User;