
import React,{useEffect,useState} from 'react'
import {Table,TableHead,TableRow,TableCell,TableBody} from "@mui/material"
import {dislplayEquipment} from "../services/api" 

const EquipmentList=()=>{
    const [equipment,setEquipment]=useState([])
    useEffect(()=>{getEquipmentList()},[])

    const getEquipmentList=async()=>{

let equipList=await dislplayEquipment()
setEquipment(equipList.data)
    }

return(
<Table>
    <TableHead>
        <TableRow>
            <TableCell>Equipment Name</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Bought On</TableCell>
            <TableCell>Last Maintainence Date</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
{
equipment.map(eq=>(
<TableRow>
    <TableCell>{eq.eqName}</TableCell>
    <TableCell>{eq.weight}</TableCell>
    <TableCell>{eq.boughtOn}</TableCell>
    <TableCell>{eq.lastMaintainenceDate}</TableCell>
    <TableCell></TableCell>
</TableRow>


))



}

        </TableBody>
   

</Table>
)

}
export default EquipmentList