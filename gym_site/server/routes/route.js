import express  from "express";
import { addEquipment } from "../controller/equipmentController.js";

const router=express.Router()

router.post('/addequipment',addEquipment)

export default router