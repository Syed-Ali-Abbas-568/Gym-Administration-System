import mongoose from "mongoose";




const clientSchema=mongoose.Schema({
    Name:String,
    email:String,
    phone:String,
    address:String,
    feestatus:String,

})


const client=mongoose.model('client',clientSchema)

export default client