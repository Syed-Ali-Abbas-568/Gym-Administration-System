import axios from "axios";

const URL='http://localhost:8000'

export const addEquipment=async(data)=>{
    try{
return await axios.post(`${URL}/addequipment`,data)
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