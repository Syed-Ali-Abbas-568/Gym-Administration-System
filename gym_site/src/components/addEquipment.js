import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  styled,
  Button,
} from "@mui/material";
import { addEquipment } from "../services/api";
import { Alert } from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: auto;
  margin-top: 5%;
  & > div {
    margin-top: 20px;
  }
`;



const defaultEquipment = {
  eqName: "",
  weight: "",
  boughtOn: "",
  lastMaintainenceDate: "",
};

const AddEquipment = () => {
  const [equipment, setEquipment] = useState(defaultEquipment);
  const [success, setSuccess] = useState(-1);
  const onValueChange = (e) => {
    setEquipment({ ...equipment, [e.target.name]: e.target.value });
    
  };

  const addEquipmentDetails = async () => {
    const res=await addEquipment(equipment);
    setSuccess(res.status===201)

   
  };


  return (
    <Container>
      <hr />
      <h2>Add Equipment</h2>
      <hr />

      <FormControl>
        <InputLabel>Equipment Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="eqName" />
      </FormControl>

      <FormControl>
        <InputLabel>Weight</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="weight" />
      </FormControl>

      <FormControl>
        <InputLabel>Bought On</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="boughtOn" />
      </FormControl>

      <FormControl>
        <InputLabel>Last Maintatinence Date</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="lastMaintainenceDate" />
      </FormControl>

      <FormControl>
        <Button
          style={{ width: "25%", margin: "auto" }}
          variant="contained"
          onClick={() => addEquipmentDetails()}
        >
          Add Equipment
        </Button>
       {success===true?<Alert severity="success">Equipment Added Successfully</Alert>:<></>}
        
        
      </FormControl>
     
    </Container>
  );
};
export default AddEquipment;
