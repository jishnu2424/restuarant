const restDb =require('../Schema/Schema')

const addRestorent = async(req,res)=>{
    try{
        const restrobody=req.body
        const response =await restDb.create(restrobody)
        return res.status(200).send('created')
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).send('error')
    }
}

const viewRestorent = async(req,res)=>{
    try{
        const response =await restDb.find()
        return res.status(200).send(response)

    }
    catch(err){
        console.log(err)
        return res.status(500).send("Server error")
    }
}

const deleteRestuarent =async (req,res)=>{
    try{
        const {id}=req.params
        await restDb.findByIdAndDelete(id)
        res.status(200).send("Restaurant deleted successfully");
    }catch(err){
        console.log(err)
        return res.status(500).send("Server error")
    }
}


const updateResturant = async(req,res)=>{
    try{
        const {id}=req.params
        console.log(id)
        const updateData=req.body
        await restDb.findByIdAndUpdate(id,updateData ,{new:true})
        res.status(200).send("Restaurant updated sucessfully")
    }catch(err){
        console.log(err);
        return res.status(500).send("server error")
    }
}


module.exports={addRestorent,viewRestorent,deleteRestuarent,updateResturant}