import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { delTrainer, displayTrainer } from '../services/api';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";


const TrainerList = () => {
    const [trainers, setTrainer] = useState([]);

    useEffect(() => {
        getTrainerList();
    }, []);

    const getTrainerList = async () => {
        const clientList = await displayTrainer();
        setTrainer(clientList.data);
    };
    const deleteTrainerInfo=async(id)=>{

        const confirmed = window.confirm("Are you sure you want to delete this trainer?");
        if (confirmed) {
            await  delTrainer(id);
            alert("Trainer deleted successfully!");
            window.location.reload();
        }
       
      }

    return (
        <Table sx={{ width: "80%", margin: "50px auto 0 auto" }}>
            <TableHead sx={{ background: "#317af7" }}>
                <TableRow>
                    <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Name</TableCell>
                    <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Email</TableCell>
                    <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Phone</TableCell>
                    <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Date of Joining</TableCell>
                    <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Clients being Trained</TableCell>
                    <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Operations</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {trainers.map((trainer) => (
                    <TableRow key={trainer.id}>
                        <TableCell>{trainer.name}</TableCell>
                        <TableCell>{trainer.email}</TableCell>

                        <TableCell>{trainer.phone}</TableCell>
                        <TableCell>{trainer.joinDate}</TableCell>
                        <TableCell>
                            <ul style={{ margin: 0, paddingInlineStart: "20px" }}>
                                {trainer.clients.map((client) => (
                                    <li
                                        key={client.id}
                                        style={{
                                            marginBottom: "8px",
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <div>Name: {client.name}</div>
                                        <div>Number: {client.phone}</div>
                                        <div>Email: {client.email}</div>
                                    </li>
                                ))}
                            </ul>
                        </TableCell>

                        <TableCell>

                        <Link to={`/trainer/updateTrainer/${trainer._id}`} ><EditIcon sx={{ margin: "10px" }} color="success"/></Link>

                        <DeleteIcon  sx={{ margin: "10px",color:"#ba1414" }} onClick={()=>deleteTrainerInfo(trainer._id)}/>

                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default TrainerList;