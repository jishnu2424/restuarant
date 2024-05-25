const mongoose= require("mongoose")
require('dotenv').config()

mongoose.connect(process.env.DB).then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log(err);
})
