import React, { useState,useEffect } from "react";
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
import { useParams,useNavigate } from "react-router-dom";
import { getEquipment,changeEquipment } from "../services/api";


import { DateField } from '@mui/x-date-pickers/DateField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


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

const ChangeEquipment = () => {

    useEffect(()=>{loadEquipmentDetails()
    },[])
const navigate=useNavigate()
  const [equipment, setEquipment] = useState(defaultEquipment);
  const [success, setSuccess] = useState(-1);
  const onValueChange = (e) => {
    setEquipment({ ...equipment, [e.target.name]: e.target.value });
    
  };

const {id}=useParams()

  const ChangeEquipmentDetails = async () => {
    const res=await changeEquipment(equipment,id);
    navigate('/equipmentlist')

    
   
  };

 

    const loadEquipmentDetails=async()=>{


const response=await getEquipment(id)

setEquipment(response.data[0])

    }
  return (
    <Container>
      <hr />
      <h2>Change Equipment</h2>
      <hr />

      <FormControl>
        <InputLabel>Equipment Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="eqName" value={equipment.eqName}/>
      </FormControl>

      <FormControl>
        <InputLabel>Weight</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="weight" value={equipment.weight}/>
      </FormControl>

      <FormControl>
        <InputLabel>Bought On</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="boughtOn" value={equipment.boughtOn}/>
      </FormControl>

      <FormControl>
        <InputLabel>Last Maintatinence Date</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="lastMaintainenceDate" value={equipment.lastMaintainenceDate}/>
      </FormControl>

      <FormControl>
     
       <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DemoContainer components={['DateField']}>
       <DateField label="Bough On" onChange={(e) =>{
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
          onClick={()=>ChangeEquipmentDetails()}
          
        >
          Save Changes
        </Button>
       {success===true?<Alert severity="success">Changes Saved Successfully</Alert>:<></>}
        
        
      </FormControl>
     
    </Container>
  );
};
export default ChangeEquipment;
