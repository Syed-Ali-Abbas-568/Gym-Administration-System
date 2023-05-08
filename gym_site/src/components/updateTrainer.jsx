import React, { useState, useEffect, useRef } from "react";
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

import {  displayClients, getClient, getTrainer, updateTrainerInformation } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

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


const UpdateTrainer = () => {
    const navigate = useNavigate()

    useEffect(() => {
        loadTrainerDetails()
    }, [])
    const { id } = useParams()

    const loadTrainerDetails = async () => {


        const response = await getTrainer(id)
        console.log("Moshi moshi")
        setTrainer(response.data[0])

        const transformedClients = await Promise.all(trainer.clients.map(async (client) => {
            const response = await getClient(client.client_id);
            const clientData = response.data;
            return clientData;
        }));

          console.log("Transformed Clients")
        setSelectedClient(transformedClients);

    }



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
            const res = await updateTrainerInformation(updatedTrainer, id);
            setSuccess(res === 201);
            navigate('/trainerlist')

            setTrainer(defaultTrainer);
            dateFieldRef.current.value = null;
           

        }
        else {
            setSuccess(2);
            navigate('/trainerlist')
        }
    };

    return (
        <Container>
            <hr />
            <h2>Update Trainer Information</h2>
            <hr />

            <FormControl>
                <InputLabel>Trainer Name</InputLabel>
                <Input readOnly onChange={onValueChange} name="name" value={trainer.name} style={{ color: 'gray', backgroundColor: '#f2f2f2', cursor: 'not-allowed' }} />
            </FormControl>



            <FormControl>
                <InputLabel>CNIC</InputLabel>
                <Input readOnly onChange={onValueChange} name="cnic" value={trainer.cnic} style={{ color: 'gray', backgroundColor: '#f2f2f2', cursor: 'not-allowed' }} />
            </FormControl>


            <FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <InputLabel>Date of Joining</InputLabel>
                    <Input readOnly onChange={onValueChange} name="dateofJoining" value={trainer.joinDate} style={{ color: 'gray', backgroundColor: '#f2f2f2', cursor: 'not-allowed'   , margin: '0.5rem 0'}} />
                </LocalizationProvider>
                <FormControl >
                    <InputLabel>Email</InputLabel>
                    <Input onChange={onValueChange} name="email" value={trainer.email}  />
                </FormControl>
            </FormControl>
            <FormControl>
                <InputLabel>Trainer Phone Number</InputLabel>
                <Input onChange={onValueChange} name="phone" value={trainer.phone} />
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
                    Update Trainer Info
                </Button>
                {success == 1 && <Alert severity="success">Trainer added successfully!</Alert>}
                {success == 0 && <Alert severity="success">Trainer added successfully!</Alert>}
                {success == 2 && <Alert severity="warning">Fill all fields before submitting</Alert>}
            </FormControl>

        </Container>
    );
};


export default UpdateTrainer;