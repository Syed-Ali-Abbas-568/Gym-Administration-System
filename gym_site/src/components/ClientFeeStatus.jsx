import React, { useState, useEffect } from 'react';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import styled from '@emotion/styled';

import { Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import emailjs from 'emailjs-com';

import { getClientsFeeStatus } from '../services/api';
import { UpdateClientFeeInformation } from '../services/api';




function sendEmail(client) {
  console.log(client.Name)
    emailjs.send('service_6x79b9a', 'template_fhmkixw', {
    
    to_name: client.Name,
    to_email: client.email,
    message: 'We are sending you this message to inform you that your payement is overdue. Please send your payment soon, otherwise your membership will be canceled.',
    from_name: 'GYM Administrater',
    reply_to: 'se.gym.project.568@gmail.com',
  }, 'YgRXvyp6LcXklWKmj')
  .then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  }, (error) => {
    console.log('FAILED...', error);
  });
}


const ClientFeeStatus = () => {


    var feeStatus = 'Paid'
    const [clients, setClients] = useState([]);
    const [selectedValue, setSelectedValue] = useState('Paid');

    useEffect(() => {
        getClientsFeeInfo(selectedValue);
    }, [selectedValue]);

    const getClientsFeeInfo = async (feeStatus) => {
        const clientList = await getClientsFeeStatus(feeStatus);
        setClients(clientList.data);
    };

    const UpdateFeeStatusToPaid = async (originalClient, newFeeStatus) => {
        try {
            const newUser = { ...originalClient, feestatus: newFeeStatus };
            console.log("MOSHI MOSH")
            console.log(originalClient._id)
            await UpdateClientFeeInformation(originalClient._id, newUser);
            getClientsFeeInfo(selectedValue);
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
                        <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Fee Status</TableCell>

                        <TableCell sx={{ fontSize: "20px", color: "#fff" }}>Operations</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map((client) => (
                        <TableRow key={client._id}>
                            <TableCell>{client.Name}</TableCell>
                            <TableCell>{client.email}</TableCell>
                            <TableCell>Rs. 5000</TableCell>
                            <TableCell>{selectedValue}</TableCell>

                            <TableCell>
                                {selectedValue === 'Paid' ? (
                                    <Button key="mark-as-pending" variant='contained' color="error" onClick={() => UpdateFeeStatusToPaid(client, 'Pending')} >Mark as Pending</Button>
                                ) : (
                                    <>
                                        <Button key="mark-as-paid" variant='contained' color="success" style={{ marginRight: 10 }} onClick={() => UpdateFeeStatusToPaid(client, 'Paid')} >Mark as Paid</Button>
                                        <Button key="send-warning-mail" variant='contained' color="error" onClick={() => sendEmail(client) }>Send Warning Mail</Button>
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

export default ClientFeeStatus;
