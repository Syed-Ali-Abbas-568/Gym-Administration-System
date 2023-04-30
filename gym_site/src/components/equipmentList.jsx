import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { dislplayEquipment,delEquipment } from "../services/api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link ,useNavigate} from "react-router-dom";



const EquipmentList = () => {


  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    getEquipmentList();
  }, []);

  const getEquipmentList = async () => {
    let equipList = await dislplayEquipment();
    setEquipment(equipList.data);
  };
  const deleteEquipment=async(id)=>{

    await delEquipment(id);
    window.location.reload(false);
  }

  return (
    <Table sx={{ width: "80%", margin: "50px auto 0 auto" }}>
      <TableHead sx={{ background: "#317af7" }}>
        <TableRow>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>
            Equipment Name
          </TableCell>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Weight</TableCell>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>
            Bought On
          </TableCell>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>
            Last Maintainence Date
          </TableCell>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>
            Operations
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {equipment.map((eq) => (
          <TableRow>
            <TableCell sx={{ fontSize: "18px" }}>{eq.eqName}</TableCell>
            <TableCell sx={{ fontSize: "18px" }}>{eq.weight}</TableCell>
            <TableCell sx={{ fontSize: "18px" }}>{eq.boughtOn}</TableCell>
            <TableCell sx={{ fontSize: "18px" }}>
              {eq.lastMaintainenceDate}
            </TableCell>
            <TableCell>
               
          <Link to={`/changeequipment/${eq._id}`} ><EditIcon sx={{ margin: "10px" }} color="success"/></Link>
          
          <DeleteIcon  sx={{ margin: "10px",color:"#ba1414" }} onClick={()=>deleteEquipment(eq._id)}/>
             
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default EquipmentList;
