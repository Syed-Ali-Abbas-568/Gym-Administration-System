import axios from "axios";

const URL = 'http://localhost:8000'


export const addEquipment = async (data) => {
    try {
        const res = await axios.post(`${URL}/addequipment`, data)
        console.log(res)
        return res
    } catch (error) {
        console.log("Error while calling Add Equipment API ", error)
    }
}


export const dislplayEquipment = async () => {

    try {
        return await axios.get(`${URL}/dislplayequipment`)
    }
    catch (error) {
        console.log("Error while calling Display Equipment API ", error)
    }
}



export const getEquipment = async (id) => {

    try {
        return await axios.get(`${URL}/${id}`)
    }
    catch (error) {
        console.log("Error while calling Get Equipment API ", error)
    }
}

export const changeEquipment = async (equipment, id) => {

    try {
        return await axios.post(`${URL}/${id}`, equipment)
    }
    catch (error) {
        console.log("Error while calling Change Equipment API ", error)
    }
}


export const delEquipment = async (id) => {

    try {
        return await axios.delete(`${URL}/${id}`)
    }
    catch (error) {
        console.log("Error while calling delete Equipment API ", error)
    }
}

export const addClient = async (data) => {
    console.log("this is data ", data)
    try {
        return await axios.post(`${URL}/addclient`, data)
    } catch (error) {
        console.log("Error while calling Add Client API ", error)
    }
}



export const displayClients = async () => {

    try {
        return await axios.get(`${URL}/displayclient`)
    }
    catch (error) {
        console.log("Error while calling Display Client API ", error)
    }
}

export const getOnlyOneClient = async (id) => {

    try {
        return await axios.get(`${URL}/client/getClient/info/:id'${id}`)
    }
    catch (error) {
        console.log("Error while calling Display Client API ", error)
    }
}




export const getClientsFeeStatus = async (status) => {

    console.log(status)
    try {
       const response= await axios.get(`${URL}/clientFeeStatus/${status}`)
       console.log(response)
       return response
       
    }
    catch (error) {
        console.log("Error while calling Display Client FEE Status API ", error)
    }
}



export const UpdateClientFeeInformation = async (id, clientInfo) => {
    try {
      return await axios.post(`${URL}/clientFeeStatus/${id}`, clientInfo);

    } catch (error) {
      console.log("Error while calling Update Client Fee Status API ", error);
    }
  }




  //Trainer APIS
  export const addTrainer = async (data) => {
    try {
      const res = await axios.post(`${URL}/trainer/addTrainer`, data);
      console.log(res);
      return res;
    } catch (error) {
      console.log("Error while calling Add Trainer API ", error);

    }
  };

  export const displayTrainer = async () => {

    try {
        return await axios.get(`${URL}/trainer/displayTrainer`)
    }
    catch (error) {
        console.log("Error while calling Display Equipment API ", error)
    }
}




export const getTrainer = async (id) => {

    try {
        return await axios.get(`${URL}/trainer/getTrainer/${id}`)
    }
    catch (error) {
        console.log("Error while calling Get trainer API ", error)
    }
}

export const updateTrainerInformation = async (trainer, id) => {

    try {
        return await axios.post(`${URL}/trainer/updateTrainer/${id}`, trainer)
    }
    catch (error) {
        console.log("Error while calling update trainer API ", error)
    }
}

export const delTrainer = async (id) => {
    

    try {

        const rest= await axios.delete(`${URL}/trainer/deleteTrainer/${id}`);
        
        return rest;
    }
    catch (error) {
        console.log("Error while calling delete Equipment API ", error)
    }
}