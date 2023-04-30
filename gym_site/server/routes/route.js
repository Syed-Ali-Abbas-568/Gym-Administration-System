import express  from "express";
import { addEquipment,getEquipments,getEquipment,changeEquipment,deleteEquipment } from "../controller/equipmentController.js";

const router=express.Router()

router.post('/addequipment',addEquipment)
router.get('/dislplayequipment',getEquipments)
router.get('/:id',getEquipment)
router.post('/:id',changeEquipment)
router.delete('/:id',deleteEquipment)



export default router