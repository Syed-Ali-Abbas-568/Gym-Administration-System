import client from "../schema/clientSchema.js"

export const addClient=async (request,response)=>{

    const cl=request.body
    const newClient=new client(cl)
try{
    await newClient.save()
    response.status(201).json(newClient)
}
catch(error){
    response.status(409).json({message:error.message})
}

} 

export const getClient=async(request,response)=>{

    try{

const equip=await client.find({})
response.status(200).json(equip)
    }
    catch(error){
response.status(404).json({message:error.message})
    }

}