const mongoose=require("mongoose")

 const contentSchema={
    username:String,
    password:String
 }
 const Content=mongoose.model("projcet",contentSchema);

 module.exports=Content