import trainer from "../schema/trainerSchema.js"



export const addTrainer = async (request, response) => {

    const train = request.body
    const newTrainer = new trainer(train)
    try {
        await newTrainer.save()
        response.status(201).json(newTrainer)
    }
    catch (error) {
        console.log("Error in adding new trainer")
        response.status(409).json({ message: error.message })
    }

}


export const getTrainer = async (request, response) => {

    try {

        const equip = await trainer.find({ _id: request.params.id })
        response.status(200).json(equip)
    }
    catch (error) {
        response.status(404).json({ message: error.message })
    }

}



export const updateTrainer = async (request, response) => {

    try {

        await trainer.updateOne({ _id: request.params.id }, request.body)
        response.status(201).json(equip)
    }
    catch (error) {
        response.status(409).json({ message: error.message })
    }

}


export const getTrainerlist = async (request, response) => {

    try {

        const equip = await trainer.find({})
        response.status(200).json(equip)
    }
    catch (error) {
        response.status(404).json({ message: error.message })
    }

}


export const deleteTrainer=async(request,response)=>{

    try{

 await trainer.deleteOne({_id:request.params.id})
 response.status(201).json({message:"Deleted Successfully"})
    }
    catch(error){
response.status(409).json({message:error.message})
    }

}




export const getTrainerFeeStatus=async (request,response) =>{
    try {
    
       const users=await  trainer.find({feeStatus: request.params.feestatus})
        response.status(200).json(users);
    } catch (error) {
        response.status(404).json({message: error.message});
    }
    
    }
    
    export const UpdateTrainerFeeStatus = async (request, response) => {
        try {
           
            const user = await trainer.updateOne({_id: request.params.id},request.body)
          response.status(200).json(users);
        } catch (error) {
          response.status(404).json({ message: error.message });
        }
      };
    
    