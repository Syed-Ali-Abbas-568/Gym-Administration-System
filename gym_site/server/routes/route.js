import express  from "express";
import { addEquipment,getEquipments,getEquipment,changeEquipment,deleteEquipment } from "../controller/equipmentController.js";
import { addClient,getClients,getClientsFeeStatus, UpdateClientsFeeStatus } from "../controller/clientController.js";
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





export default router