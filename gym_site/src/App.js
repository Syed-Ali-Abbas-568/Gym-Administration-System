import React from "react";
import NavBar from "./components/NavBar";
import AddClient from "./components/addClient";
import AddEquipment from "./components/addEquipment";
import EquipmentList from "./components/equipmentList";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import EquipmentToBought from "./components/equipmentToBought";
import EquipmentsCards from "./components/equipmentMain";
import ChangeEquipment from "./components/changeMaintainenceDate";

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

       
     </Routes>
  </BrowserRouter>
  </div>
 )
}

export default App;
