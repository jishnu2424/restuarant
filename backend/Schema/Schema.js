const mongoose =require('mongoose')

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
})

module.exports = db=mongoose.model("RestData",schema)