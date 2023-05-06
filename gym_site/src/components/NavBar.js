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
    <AppBar position="static">
      <Toolbar>
      
        <Tabs to="/" sx={{fontFamily:'cursive',fontSize:50}}>AKASH</Tabs>

        <Tabs to="/equipment">Equipment</Tabs>
        <Tabs to="/client">Client</Tabs>
               

       </Toolbar>
    </AppBar>
  );
};
export default NavBar;
