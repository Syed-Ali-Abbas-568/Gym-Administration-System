import equipment from "../schema/equipmentSchema.js"


export const addEquipment=async (request,response)=>{

    const eq=request.body
    const newEquipment=new equipment(eq)
try{
    await newEquipment.save()
    response.status(201).json(newEquipment)
}
catch(error){
    response.status(409).json({message:error.message})
}

} 

export const getEquipments=async(request,response)=>{

    try{

const equip=await equipment.find({})
response.status(200).json(equip)
    }
    catch(error){
response.status(404).json({message:error.message})
    }

}

export const getEquipment=async(request,response)=>{

    try{

const equip=await equipment.find({_id:request.params.id})
response.status(200).json(equip)
    }
    catch(error){
response.status(404).json({message:error.message})
    }

}

export const changeEquipment=async(request,response)=>{

    try{

 await equipment.updateOne({_id:request.params.id},request.body)
response.status(201).json(equip)
    }
    catch(error){
response.status(409).json({message:error.message})
    }

}

export const deleteEquipment=async(request,response)=>{

    try{

 await equipment.deleteOne({_id:request.params.id})
 response.status(201).json({message:"Deleted Successfully"})
    }
    catch(error){
response.status(409).json({message:error.message})
    }

}