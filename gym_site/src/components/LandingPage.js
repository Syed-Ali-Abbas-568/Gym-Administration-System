import React from "react";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";
import "./LandingPage.css";

const useStyles = makeStyles((theme) => ({
container: {
display: "flex",
alignItems: "center",
justifyContent: "center",
height: "100vh",
backgroundColor: "#F8F8F8",
},
textContainer: {
display: "flex",
flexDirection: "column",
alignItems: "flex-start",
justifyContent: "center",
margin: theme.spacing(5),
},
title: {
fontFamily: "cursive",
fontWeight: "bold",
},
featuresContainer: {
display: "flex",
flexDirection: "column",
alignItems: "flex-start",
justifyContent: "center",
margin: theme.spacing(5),
},
feature: {
fontFamily: "cursive",
margin: theme.spacing(2),
},
image: {
width: 500,
height: 500,
marginLeft: "auto",
marginRight: theme.spacing(10),
marginTop: theme.spacing(5),
},
}));

const LandingPage = () => {
const classes = useStyles();

return (
<Container className={classes.container}>
<Grid container>
<Grid item xs={12} sm={6} className={classes.textContainer}>
<Typography variant="h2" className={classes.title}>
Welcome!!!
</Typography>
<hr />
<Typography
variant="body1"
className={classes.title}
style={{ fontWeight: "bold" }}
>
Effortlessly manage your gym operations and keep track of member
information with our intuitive and user-friendly admin panel.
</Typography>
</Grid>
<Grid item xs={12} sm={6} className={classes.featuresContainer}>
<Typography variant="h4" className={classes.title}>
Features
</Typography>
<hr />
<Typed
strings={[
"Efficiently manage your gym operations and member data with our user-friendly Web.",
"Manage and monitor all aspects of your gym's operations ",
"Push yourself to new limits and achieve your fitness goals.",
]}
typeSpeed={50}
backSpeed={25}
loop
className={classes.feature}
/>
</Grid>
</Grid>
<img
     src="./pageimg.jpg"
     alt="react logo"
     className={classes.image}
   />
</Container>
);
};

export default LandingPage;