import axios from "axios";

const URL='http://localhost:8000/'

export const addEquipment=async(data)=>{
    try{
return await axios.post(`${URL}/addEquipment`,data)
    }catch(error){
console.log("Error while calling Add Equipment API ",error)
    }
}