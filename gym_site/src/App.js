import React from "react";
import NavBar from "./components/NavBar";
import AddClient from "./components/addClient";
import AddEquipment from "./components/addEquipment";
import EquipmentList from "./components/equipmentList";
import ClientList from "./components/clientList";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes,Route } from "react-router-dom";


function App(){

 return(

  <div>
  <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path="/" element={<LandingPage />}/>
       <Route path="/addclient" element={<AddClient />} />
       <Route path="/addequipment" element={<AddEquipment />}/>
       <Route path="/equipmentlist" element={<EquipmentList />}/>
       <Route path="/clientlist" element={<ClientList />}/>

       
     </Routes>
   </BrowserRouter>
  </div>
 )
}

export default App;
