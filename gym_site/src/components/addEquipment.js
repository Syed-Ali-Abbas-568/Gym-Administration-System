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
       
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField']}>
        <DateField label="Bough On"  onChange={(e) =>{
          let d = new Date(e)
          d = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
          setEquipment({ ...equipment, boughtOn: d})}} name="boughtOn" />
      </DemoContainer>
    </LocalizationProvider>
      </FormControl>

   
      <FormControl>
    
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateField']}>
        <DateField label="Last Maintatinence Date" onChange={(e) => {
              let d = new Date(e)
              d = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
          setEquipment({ ...equipment, lastMaintainenceDate:d})}}   name="lastMaintainenceDate" />
      </DemoContainer>
    </LocalizationProvider>


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
