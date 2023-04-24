import express  from "express";
import { addEquipment,getEquipment } from "../controller/equipmentController.js";

const router=express.Router()

router.post('/addequipment',addEquipment)
router.get('/dislplayequipment',getEquipment)

export default router