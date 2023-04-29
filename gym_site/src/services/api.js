import axios from "axios";

const URL='http://localhost:8000'

export const addClient=async(data)=>{
    try{
return await axios.post(`${URL}/addclient`,data)
    }catch(error){
console.log("Error while calling Add Client API ",error)
    }
}

export const addEquipment=async(data)=>{
    try{
const res=await axios.post(`${URL}/addequipment`,data)
console.log(res)
return res
    }catch(error){
console.log("Error while calling Add Equipment API ",error)
    }
}


export const dislplayEquipment=async()=>{

    try{
return await axios.get(`${URL}/dislplayequipment`) 
    }
    catch(error){
        console.log("Error while calling Display Equipment API ",error)
    }
}

<<<<<<< Updated upstream
export const displayClients=async()=>{

    try{
return await axios.get(`${URL}/displayclient`) 
    }
    catch(error){
        console.log("Error while calling Display Client API ",error)
=======

export const getEquipment=async(id)=>{
    
    try{
return await axios.get(`${URL}/${id}`) 
    }
    catch(error){
        console.log("Error while calling Get Equipment API ",error)
    }
}

export const changeEquipment=async(equipment,id)=>{
    
    try{
return await axios.post(`${URL}/${id}`,equipment) 
    }
    catch(error){
        console.log("Error while calling Change Equipment API ",error)
    }
}


export const delEquipment=async(id)=>{
    
    try{
return await axios.delete(`${URL}/${id}`) 
    }
    catch(error){
        console.log("Error while calling delete Equipment API ",error)
>>>>>>> Stashed changes
    }
}