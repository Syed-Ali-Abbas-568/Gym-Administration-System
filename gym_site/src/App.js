import React from "react";
import NavBar from "./components/NavBar";
import AddEquipment from "./components/addEquipment";
import EquipmentList from "./components/equipmentList";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes,Route } from "react-router-dom";

function App(){

 return(

  <div>
  <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path="/" element={<LandingPage />}/>
       <Route path="/addequipment" element={<AddEquipment />}/>
       <Route path="/equipmentlist" element={<EquipmentList />}/>

       
     </Routes>
   </BrowserRouter>
  </div>
 )
}

export default App;
