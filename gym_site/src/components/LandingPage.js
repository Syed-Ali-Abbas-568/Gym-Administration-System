import React from "react";
import Typed from "react-typed";
const LandingPage = () => {
  return (
    <div style={{display:'flex',flexDirection:"row"}}>
      <div >
        <div style={{ width: 600, margin: 20, fontWeight: "bold" }}>
          <h1 style={{ fontFamily: "cursive" }}>Welcome!!!</h1>
          <hr />
          <p style={{ fontFamily: "cursive", fontWeight: "bold" }}>
            Effortlessly manage your gym operations and keep track of member
            information with our intuitive and user-friendly admin panel.
          </p>
        </div>
        <div style={{ width: 600, margin: 20 }}>
          <h1 style={{ fontFamily: "cursive" }}>Features</h1>
          <hr />
          <Typed
            strings={[
              "Efficiently manage your gym operations and member data with our user-friendly Web.",
              "Manage and monitor all aspects of your gym's operations ",
              "Push yourself to new limits and achieve your fitness goals.",
            ]}
            style={{ fontFamily: "cursive" }}
            typeSpeed={50}
            backSpeed={25}
            loop
          />
        </div>
      </div>
      <div>
       
     
      </div>
      <img style={{width:500,height:500,marginLeft:'auto',marginRight:20,marginTop:25}} src="./pageimg.jpg" alt="react logo" />
    </div>
  );
};

export default LandingPage;
