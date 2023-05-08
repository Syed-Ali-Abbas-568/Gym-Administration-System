import express  from "express";
import { addEquipment,getEquipments,getEquipment,changeEquipment,deleteEquipment } from "../controller/equipmentController.js";
import { addClient,getClients,getClientsFeeStatus, UpdateClientsFeeStatus, getClient } from "../controller/clientController.js";
import { addTrainer,  getTrainerlist, getTrainer, updateTrainer, deleteTrainer } from "../controller/trainerController.js";


const router=express.Router()



router.post('/addclient',addClient)
router.get('/displayclient',getClients)
router.get('/client/getClient/info/:id',getClient)

router.post('/addequipment',addEquipment)
router.get('/dislplayequipment',getEquipments)
router.get('/:id',getEquipment)
router.post('/:id',changeEquipment)
router.delete('/:id',deleteEquipment)

// Client Fee Routes
router.get('/clientFeeStatus/:feestatus',getClientsFeeStatus)
router.post('/clientFeeStatus/:id',UpdateClientsFeeStatus)

//Trainer ROutes:
router.post('/trainer/addTrainer',addTrainer)
router.get('/trainer/displayTrainer',getTrainerlist)
router.get('/trainer/getTrainer/:id',getTrainer)

router.post('/trainer/updateTrainer/:id',updateTrainer)
router.delete('/trainer/deleteTrainer/:id',deleteTrainer)

export default router