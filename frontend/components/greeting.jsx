import React from 'react';
import {Link} from "react-router-dom";

const Greeting = ({ currentUser, logoutUser, openModal, closeModal }) => {

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
  
    return (
      currentUser ?
      personalGreeting(currentUser) :
      sessionLinks()
    );
  };
  
  export default Greeting;
  
  
  
  
  
  
  
  // import { openModal } from '../actions/modal_actions';
// class Greeting extends React.Component{
//     constructor(props){
//       super(props);
//       this.handleClick = this.handleClick.bind(this);
//     }
   
//     handleClick(e){
//         e.preventDefault();
//         this.props.logoutUser();
//     }
  
//     render(){
//         if (this.props.currentUser === undefined || this.props.currentUser === null){
//             return(
//                 <>
//                    <nav className="login-signup">
//                       <button onClick={() => this.openModal('login')}>Login</button>
//                       &nbsp;or&nbsp;
//                       <button onClick={() => this.openModal('signup')}>Signup</button>
//                   </nav>
//                 </>
//             )
//         }
//         else{
//         return(
//             <>
//               <h1> Welcome, {this.props.currentUser.email} </h1>
//               <button onClick={this.handleClick}>Log Out</button>
//             </>
//         )
//         }
//     }
  
// }

// export default Greeting;
