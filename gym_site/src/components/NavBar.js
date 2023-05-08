import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
  
  
`;

const NavBar = () => {
  return (
    <AppBar position="static"  >
      <Toolbar sx={{background:'#317af7'}}>
      
        <Tabs to="/home" sx={{fontFamily:'cursive',fontSize:50,background:'#317af7',color: 'white'}}>AKASH</Tabs>

        <Tabs to="/equipment" sx={{color: 'white'}}>Equipment</Tabs>
        <Tabs to="/client" sx={{color: 'white'}}>Client</Tabs>
               
        <Tabs to="/trainer" sx={{color: 'white'}}>Trainer</Tabs>
       </Toolbar>
    </AppBar>
  );
};
export default NavBar;
