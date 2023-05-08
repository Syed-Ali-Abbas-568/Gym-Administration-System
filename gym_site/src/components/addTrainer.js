import React, { useState, useEffect,useRef } from "react";
import {
    FormControl,
    FormGroup,
    InputLabel,
    FormLabel,
    Input,
    styled,
    Button,
    Alert,
    RadioGroup,
    FormControlLabel,
    Radio,
    Select,
    MenuItem,
    Chip,
    Stack
} from "@mui/material";

import { addTrainer, displayClients } from "../services/api";

import { DateField } from '@mui/x-date-pickers/DateField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Container = styled(FormGroup)`
  width: 50%;
  margin: auto;
  margin-top: 5%;
  & > div {
    margin-top: 20px;
  }
`;

const defaultTrainer = {
    name: "",
    email: "",
    cnic: "",
    joinDate: "",
    clients: [],
    feeStatus: "",
    phone: ""
};


const AddTrainer = () => {
    const [trainer, setTrainer] = useState(defaultTrainer);
    const [success, setSuccess] = useState(4);
    const [error, setError] = useState("");
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState("");
    const dateFieldRef = useRef(null);

    useEffect(() => {
        const getClientsData = async () => {
            const clientdata = await displayClients();
            setClients(clientdata.data);
        };
        getClientsData();
    }, []);

    const validateFields = () => {
        if (
            !trainer.name ||
            !trainer.email ||
            !trainer.cnic ||
            !trainer.phone ||
            !trainer.joinDate ||
            !trainer.feeStatus ||
            !trainer.clients.length
        ) {
            setSuccess(2)
            setError("All fields are required");
            return false;
        } else {
            setSuccess(4)
            return true;
        }
    };

    const onValueChange = (e) => {
        setTrainer({ ...trainer, [e.target.name]: e.target.value });
    };

    const onClientChange = (e) => {
        const selectedClient = e.target.value;
        setSelectedClient(selectedClient);
        const selectedClients = [...trainer.clients];

        if (selectedClients.includes(selectedClient)) {
            selectedClients.splice(selectedClients.indexOf(selectedClient), 1);
        } else {
            selectedClients.push(selectedClient);
        }

        setTrainer({ ...trainer, clients: selectedClients });
    };

    const addTrainerDetails = async () => {
        if (validateFields()) {
            const newClients = trainer.clients.map((client) => {
                return {
                    name: client.Name,
                    email: client.email,
                    phone: client.phone
                };
            });
            console.log('here')
            console.log(newClients)
            const updatedTrainer = { ...trainer, clients: newClients };
            console.log(updatedTrainer)
            const res = await addTrainer(updatedTrainer);
            setSuccess(res === 201);

                setTrainer(defaultTrainer);
dateFieldRef.current.value = null;
            

        }
        else {
            setSuccess(2);

        }
    };

    return (
        <Container>
            <hr />
            <h2>Add Trainer</h2>
            <hr />

            <FormControl>
                <InputLabel>Trainer Name</InputLabel>
                <Input onChange={onValueChange} name="name" value={trainer.name} />
            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={onValueChange} name="email" value={trainer.email} />
            </FormControl>

            <FormControl>
                <InputLabel>CNIC</InputLabel>
                <Input onChange={onValueChange} name="cnic" value={trainer.cnic} />
            </FormControl>
            <FormControl>
                <InputLabel>Trainer Phone Number</InputLabel>
                <Input onChange={onValueChange} name="phone" value={trainer.phone} />
            </FormControl>

            <FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateField']}>
                        <DateField label="Date of Joining"  inputRef={dateFieldRef}  onChange={(e) => {
                            let d = new Date(e)
                            d = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
                            setTrainer({ ...trainer, joinDate: d })



                        }} name="joinedOn" />
                    </DemoContainer>
                </LocalizationProvider>
            </FormControl>

            <FormControl>
                <InputLabel id="clients-label">Clients</InputLabel>
                <Select
                    labelId="clients-label"
                    id="clients"
                    value={selectedClient}
                    onChange={(e) => onClientChange(e)}
                    name="Select Clients to be assigned to this trainer"
                >
                    {clients.map((client) => (
                        <MenuItem key={client.id} value={client}>
                            {client.Name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {trainer.clients.length > 0 && (
                <Stack direction="row" spacing={1} alignItems="center" wrap="wrap">
                    <InputLabel>Selected Clients:</InputLabel>
                    {trainer.clients.map((client) => (
                        <Chip
                            key={client.id}
                            label={client.Name}
                            onDelete={() => {
                                const selectedClients = [...trainer.clients];
                                selectedClients.splice(selectedClients.indexOf(client), 1);
                                setTrainer({ ...trainer, clients: selectedClients });
                            }}
                        />
                    ))}
                </Stack>
            )}
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Trainer Fee Status</FormLabel>
                <RadioGroup onChange={onValueChange} name="feeStatus" value={trainer.feeStatus}>
                    <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
                    <FormControlLabel value="Paid" control={<Radio />} label="Paid" />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <Button
                    style={{ width: "25%", margin: "auto" }}
                    variant="contained"
                    onClick={addTrainerDetails}
                >
                    Add Trainer
                </Button>
                {success == 1 && <Alert severity="success">Trainer added successfully!</Alert>}
                {success == 0 && <Alert severity="success">Trainer added successfully!</Alert>}
                {success == 2 && <Alert severity="warning">Fill all fields before submitting</Alert>}
            </FormControl>

        </Container>
    );
};


export default AddTrainer;