import React from "react";
import NavBar from "./components/NavBar";

import LandingPage from "./components/LandingPage";

import AddEquipment from "./components/addEquipment";
import EquipmentList from "./components/equipmentList";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import EquipmentToBought from "./components/equipmentToBought";
import EquipmentsCards from "./components/equipmentMain";
import ChangeEquipment from "./components/changeMaintainenceDate";

import AddClient from "./components/addClient";
import ClientList from "./components/clientList";
import ClientFeeStatus from "./components/ClientFeeStatus";
import ClientCards from "./components/clientMain";

import AddTrainer from "./components/addTrainer";
import TrainerCards from "./components/trainerMain";
import TrainerList from "./components/trainerList";
import UpdateTrainer from "./components/updateTrainer";

function App(){

 return(

  <div>
  <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path="/" element={<LandingPage />}/>
       <Route path="/addequipment" element={<AddEquipment />}/>
       <Route path="/equipmentlist" element={<EquipmentList />}/>   
       <Route path="/equipmenttobought" element={<EquipmentToBought/>}/>
       <Route path="/equipment" element={<EquipmentsCards/>}/>
       <Route path="/changeequipment/:id" element={<ChangeEquipment/>}/>

       <Route path="/client" element={<ClientCards/>}/>
       <Route path="/addclient" element={<AddClient />} />
       <Route path="/clientlist" element={<ClientList />}/>  

       <Route path= "/clientFeeStatus" element={<ClientFeeStatus/>}/>

       {/* Trainer routes below */}

       <Route path="/trainer" element={<TrainerCards/>}/>
       <Route path="/addtrainer" element={<AddTrainer />} />
       <Route path="/trainerlist" element={<TrainerList  />}/>  
       <Route path="/trainer/updateTrainer/:id" element={<UpdateTrainer/>}/>



       <Route path= "/trainerFeeStatus" element={<ClientFeeStatus/>}/>



     </Routes>
  </BrowserRouter>
  </div>
 )
}

export default App;
