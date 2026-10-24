const mongoose =require('mongoose');



const itemSchema =mongoose.Schema({
id :Number,
Name:{
  type:String,
  trim:true
},
itemColor:{
    type:String,
    trim:true,
},

status:{
  type:String,
  trim:true      //found ,lost
}

});


module.exports = mongoose.model("item",itemSchema);