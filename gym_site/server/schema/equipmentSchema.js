import mongoose from "mongoose";




const equipmentSchema=mongoose.Schema({
    eqName:String,
    weight:String,
    boughtOn:String,
    lastMaintainenceDate:String


})


const equipment=mongoose.model('equipment',equipmentSchema)

export default equipment