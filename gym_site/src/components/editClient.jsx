import React, { useState,useEffect } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  styled,
  Button,
} from "@mui/material";
import { addClient, getClient,changeClient } from "../services/api"; // Import your API function for adding clients
import { useParams,useNavigate } from "react-router";
import { Alert } from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: auto;
  margin-top: 5%;
  & > div {
    margin-top: 20px;
  }
`;

const defaultClient = {
  Name: "",
  email: "",
  phone: "",
  address:"",
  feestatus:"",

};

const EditClient = () => {
    const [client, setClient] = useState(defaultClient);
    const {id}=useParams();
    useEffect(()=>{
        loadUserDetails();
    },[])
    const ChangeClientDetails = async () => {
        const res=await changeClient(client,id);
        navigate('/clientlist')
      };
    const navigate=useNavigate();
    const loadUserDetails=async()=>{
        const response=await getClient(id);
        setClient(response.data[0]);
    }
  const onValueChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
    console.log(client);
  };




  return (
    <Container>
      <hr />
      <h2>Edit Client</h2>
      <hr />
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Name" value={client.Name}/>
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" value={client.email}/>
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" value={client.phone}/>
      </FormControl>

      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="address" value={client.address}/>
      </FormControl>

      <FormControl>
        <InputLabel>Fee Status</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="feestatus" value={client.feestatus}/>
      </FormControl>

      <FormControl>
        <Button
          style={{ width: "25%", margin: "auto" }}
          variant="contained"
          onClick={() => ChangeClientDetails()}
        >
          Save Changes
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditClient;