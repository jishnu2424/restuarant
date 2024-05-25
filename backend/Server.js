const  express = require('express');
const route = require('./Route/Router');
require ('./DataBase/Db.js')
const cors =require ('cors')

const app = express()


app.use(express.json())

app.use(cors())
app.use ('/',route)


app.listen(5000,()=>{
    console.log("server running");
})