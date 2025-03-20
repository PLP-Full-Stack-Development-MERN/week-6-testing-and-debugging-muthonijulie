const mongoose=require('mongoose');

const bugSchema=new mongoose.Schema({
    title:String,
    description:String,
    status:{type:String,default:'Open'},
    createdAt:{type:Date,default:Date.now},
});
module.exports=mongoose.model("Bug",bugSchema);