import React, { useState, useEffect } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import styled from '@emotion/styled';

import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import emailjs from 'emailjs-com';


import { UpdateTrainerFeeInfo, getTrainerFeeInfoStatus } from '../services/api';




function sendEmail(client) {

    const confirmed = window.confirm(`Are you sure you want to send salary to this MR. ${client.name}?`);
    if (confirmed) {


        emailjs.send('service_6x79b9a', 'template_y3e03wf', {
            to_name: client.name,
            to_email: client.email,
            message: 'We are sending you this message to inform you that we have sent your salary to your account please check',
            from_name: 'GYM Administrater',
            reply_to: 'se.gym.project.568@gmail.com',
        }, 'YgRXvyp6LcXklWKmj')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
                console.log('FAILED...', error);
            });
 alert(`Salary has been successfully sent to trainer ${client.name}`)
    }
}








const TrainerFee = () => {

    var feeStatus = 'Paid'
    const [trainers, setClients] = useState([]);
    const [selectedValue, setSelectedValue] = useState('Paid');

    useEffect(() => {
        getTrainerFeeInfo(selectedValue);
    }, [selectedValue]);

    const getTrainerFeeInfo = async (feeStatus) => {
        const trainerList = await getTrainerFeeInfoStatus(feeStatus);
        setClients(trainerList.data);
    };

    const UpdateFeeStatusToPaid = async (originalTrainer, newFeeStatus) => {
        try {
            const newUser = { ...originalTrainer, feeStatus: newFeeStatus };

            console.log(originalTrainer._id)
            await UpdateTrainerFeeInfo(originalTrainer._id, newUser);
            getTrainerFeeInfo(selectedValue);
        } catch (error) {
            console.log('Error while updating fee status: ', error);
        }
    };

    const handleChange = (event, newValue) => {
        setSelectedValue(newValue);
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '50px',
                }}
            >
                <ToggleButtonGroup
                    value={selectedValue}
                    exclusive
                    onChange={handleChange}
                    sx={{ marginTop: '50px' }}
                >
                    <ToggleButton value="Paid">
                        Paid
                    </ToggleButton>
                    <ToggleButton value="Pending">
                        Pending
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Table sx={{ width: "80%", margin: "50px auto 0 auto" }}>
                <TableHead sx={{ background: "#317af7" }}>
                    <TableRow>
                        <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Name</TableCell>
                        <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Email</TableCell>
                        <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Amount</TableCell>
                        <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Salary Status</TableCell>

                        <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Operations</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trainers.map((trainer) => (
                        <TableRow key={trainer._id}>
                            <TableCell>{trainer.name}</TableCell>
                            <TableCell>{trainer.email}</TableCell>
                            <TableCell>Rs. 5000</TableCell>
                            <TableCell>{selectedValue}</TableCell>

                            <TableCell>
                                {selectedValue === 'Paid' ? (
                                    <Button key="mark-as-pending" variant='contained' color="error" onClick={() => UpdateFeeStatusToPaid(trainer, 'Pending')} >Mark as Pending</Button>
                                ) : (
                                    <>
                                        <Button key="mark-as-paid" variant='contained' color="success" style={{ marginRight: 10 }} onClick={() => UpdateFeeStatusToPaid(trainer, 'Paid')} >Mark as Paid</Button>

                                        <Button key="send-warning-mail" variant='contained' color="secondary" onClick={() => sendEmail(trainer) }>Send Salary</Button>

                                    </>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default TrainerFee;
