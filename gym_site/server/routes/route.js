import express  from "express";
import { addEquipment,getEquipments,getEquipment,changeEquipment,deleteEquipment } from "../controller/equipmentController.js";
import { addClient,getClients,getClientsFeeStatus, UpdateClientsFeeStatus } from "../controller/clientController.js";
import { addTrainer,getTrainer,getTrainerlist,updateTrainer,deleteTrainer, getTrainerFeeStatus,UpdateTrainerFeeStatus } from "../controller/trainerController.js";
const router=express.Router()


router.post('/addclient',addClient)
router.get('/displayclient',getClients)

router.post('/addequipment',addEquipment)
router.get('/dislplayequipment',getEquipments)
router.get('/:id',getEquipment)
router.post('/:id',changeEquipment)
router.delete('/:id',deleteEquipment)

//Fee routes
router.get('/clientFeeStatus/:feestatus',getClientsFeeStatus)
router.post('/clientFeeStatus/:id',UpdateClientsFeeStatus)

//
//Trainer ROutes:
router.post('/trainer/addTrainer',addTrainer)
router.get('/trainer/displayTrainer',getTrainerlist)
router.get('/trainer/getTrainer/:id',getTrainer)

router.post('/trainer/updateTrainer/:id',updateTrainer)
router.delete('/trainer/deleteTrainer/:id',deleteTrainer)

//Fee routes
router.get('/trainerFeeStatus/:feestatus',getTrainerFeeStatus)
router.post('/trainerFeeStatus/update/:id',UpdateTrainerFeeStatus)

export default router