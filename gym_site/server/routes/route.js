import express  from "express";
<<<<<<< Updated upstream
import { addEquipment,getEquipment, } from "../controller/equipmentController.js";
import { addClient,getClient } from "../controller/clientController.js";
=======
import { addEquipment,getEquipments,getEquipment,changeEquipment,deleteEquipment} from "../controller/equipmentController.js";
>>>>>>> Stashed changes

const router=express.Router()

router.post('/addequipment',addEquipment)
<<<<<<< Updated upstream
router.get('/dislplayequipment',getEquipment)
router.post('/addclient',addClient)
router.get('/displayclient',getClient)
=======
router.get('/dislplayequipment',getEquipments)
router.get('/:id',getEquipment)
router.post('/:id',changeEquipment)
router.delete('/:id',deleteEquipment)


>>>>>>> Stashed changes

export default router