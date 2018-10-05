var mongoose = require('mongoose');

mongoose.connect('mongodb://username:password@ds213053.mlab.com:13053/todolist', (error)=>{
  if(!error){
    console.log("baglandi");
  }else{
    console.log("Sorun oluştu");
  }
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
  desc: { type: String },
  status: String,
  startedDate: { type: Date },
  endDate: { type: Date },
  createdDate: { type: Date, default: Date.now },
  modifiedDate: { type: Date, default: Date.now }
});

mongoose.model('User', userSchema, 'works');
