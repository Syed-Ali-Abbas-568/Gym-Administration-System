import express  from "express";
import { addEquipment,getEquipment, } from "../controller/equipmentController.js";
import { addClient,getClient } from "../controller/clientController.js";

const router=express.Router()

router.post('/addequipment',addEquipment)
router.get('/dislplayequipment',getEquipment)
router.post('/addclient',addClient)
router.get('/displayclient',getClient)

export default router