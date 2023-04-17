import { AppBar,Toolbar,styled } from "@mui/material";


const Tabs=styled('p')`
font-size:20px;
margin-right:20px;
`

const NavBar=()=>{
return(
<AppBar position="static">
   <Toolbar>
    <Tabs>AKASH</Tabs>
    <Tabs>Add User</Tabs>
    <Tabs>Display Users</Tabs>



   </Toolbar>
</AppBar>
)
}
export default NavBar
