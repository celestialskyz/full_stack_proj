import React from 'react';
import {Link} from "react-router-dom";

const Greeting = ({ currentUser, logoutUser, openModal }) => {
 
    const sessionLinks = () => (
      <nav className="login-signup">
       <button onClick={() => openModal('signup')}>Signup</button>
       <button onClick={() => openModal('login')}>Login</button>
      </nav>
    );
    const personalGreeting = () => (
      <>
          <hgroup className="header-group">
          <h2 className="header-name">Hi {currentUser.first_name}</h2>
          <button onClick={()=>logoutUser()}>Log Out</button>
        </hgroup>
      </>
    );
  
    if (currentUser != null ||currentUser != undefined){
       return (personalGreeting(currentUser));
    }
    else {
      return sessionLinks()
    }
    // return (
    //   currentUser ?
    //   :
    //   sessionLinks()
    // );
  };
  
  export default Greeting;
  
  
  
  