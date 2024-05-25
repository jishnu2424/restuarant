const{Router} =require('express')
const Info =require('../Controller/Controller')
const route =Router()

route.post("/add",Info.addRestorent)

route.get("/view",Info.viewRestorent)

route.delete("/delete/:id",Info.deleteRestuarent)

route.patch("/update/:id",Info.updateResturant)


module.exports = route


