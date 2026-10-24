const mongoose = require("mongoose");


const connectDB =async()=>{

    try{
// await mongoose.connect("mongodb+srv://superdjawad09_db_user:yx2wfoY0yBW6GZam@task1q.b4mibmy.mongodb.net/");
await mongoose.connect("mongodb://superdjawad09_db_user:yx2wfoY0yBW6GZam@ac-cxyueim-shard-00-00.b4mibmy.mongodb.net:27017,ac-cxyueim-shard-00-01.b4mibmy.mongodb.net:27017,ac-cxyueim-shard-00-02.b4mibmy.mongodb.net:27017/?ssl=true&replicaSet=atlas-g170lp-shard-0&authSource=admin");

console.log("mongo db is connected");
    }catch(error){
        console.log(error)
    };
};


module.exports =connectDB;






//superdjawad09_db_user
//yx2wfoY0yBW6GZam