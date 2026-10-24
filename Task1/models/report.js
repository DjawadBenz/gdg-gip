const mongoose =require("mongoose");



//Schema of lost items
const lostSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true,                    //remove blanks
  },
  itemName:{
    type:String,
    required:true,
    trim:true, 

  },itemColor:{
    type:String,
    trim:true, 
    

  },
  type:{
    type:String,
    required:true,
    trim:true ,
    enum:['lost','found','recovered'],

},

    itemid:Number,
// type:String     //who find ,who lost


},{
  timestamps:true 
});


//schema of found item
const foundSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
    trim:true,                    //remove blanks
  },
  itemName:{
    type:String,
    required:true,
    trim:true, 

  },itemColor:{
    type:String,
    trim:true, 
    

  },
  type:{
    type:String,
    required:true,
    trim:true ,
    enum:['lost','found','recovered'],
  },

    itemid:Number,
// type:String     //who find ,who lost


},{
  timestamps:true 
});



const lost = mongoose.model("lost", lostSchema);
const found = mongoose.model("found", foundSchema);

module.exports = {
  lost,
  found
};