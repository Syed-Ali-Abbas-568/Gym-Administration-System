import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  styled,
  Button,
} from "@mui/material";
import { addClient } from "../services/api"; // Import your API function for adding clients

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

};

const AddClient = () => {
  const [client, setClient] = useState(defaultClient);

  const onValueChange = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
    console.log(client);
  };

  const addClientDetails = async () => {
    await addClient(client);
  };

  return (
    <Container>
      <hr />
      <h2>Add Client</h2>
      <hr />

      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Name" />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone" />
      </FormControl>

      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="address" />
      </FormControl>

      <FormControl>
        <Button
          style={{ width: "25%", margin: "auto" }}
          variant="contained"
          onClick={() => addClientDetails()}
        >
          Add Client
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddClient;