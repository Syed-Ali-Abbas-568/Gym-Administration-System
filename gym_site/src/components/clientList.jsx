import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { displayClients } from '../services/api';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link ,useNavigate} from "react-router-dom";

const ClientList = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClientList();
  }, []);

  const getClientList = async () => {
    const clientList = await displayClients();
    setClients(clientList.data);
  };

  return (
    <Table sx={{ width: "80%", margin: "50px auto 0 auto" }}>
      <TableHead sx={{ background: "#317af7" }}>
        <TableRow>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Name</TableCell>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Email</TableCell>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Phone</TableCell>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Address</TableCell>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Fee Status</TableCell>
          <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Operations</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {clients.map((client) => (
          <TableRow key={client.id}>
            <TableCell>{client.Name}</TableCell>
            <TableCell>{client.email}</TableCell>
            <TableCell>{client.phone}</TableCell>
            <TableCell>{client.address}</TableCell>
            <TableCell>{client.feestatus}</TableCell>
            <TableCell>
               
               <EditIcon sx={{ margin: "10px" }} color="success"/>
               
               <DeleteIcon  sx={{ margin: "10px",color:"#ba1414" }}/>
                  
                 </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ClientList;