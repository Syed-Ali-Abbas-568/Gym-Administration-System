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
        <Tabs to="/">AKASH</Tabs>

<<<<<<< Updated upstream
        <Tabs to="/addclient">Add Client</Tabs>

        <Tabs to="/addequipment">Add Equipment</Tabs>

        <Tabs to="/clientlist">Display Client</Tabs>

        <Tabs to="/equipmentlist">Display Equipment</Tabs>
      </Toolbar>
=======
        <Tabs to="/equipment">Equipment</Tabs>

       </Toolbar>
>>>>>>> Stashed changes
    </AppBar>
  );
};
export default NavBar;
