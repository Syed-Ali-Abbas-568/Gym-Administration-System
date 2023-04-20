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

        <Tabs to="/addequipment">Add Equipment</Tabs>

        <Tabs to="/equipmentlist">Display Equipment</Tabs>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
