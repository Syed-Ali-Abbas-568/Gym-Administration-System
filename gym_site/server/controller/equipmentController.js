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