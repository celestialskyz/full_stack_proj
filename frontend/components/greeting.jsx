import React from 'react';
import {Link} from "react-router-dom";
import ReservationIndex from '../components/reservation_index/reservation_index';
// import ReservationIndexContainer from '../components/reservation_index/reservation_index_container';
class Greeting extends React.Component{
  constructor(props){
    super(props);
    
    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
  }
  componentDidMount(){
   // debugger
    if (this.props.currentUser != null ||this.props.currentUser != undefined){
   this.props.requestResvs(this.props.currentUser.id);
      }
  }
  
  sessionLinks(){
    return (
      <>
        <nav className="login-signup">
           <button onClick={() => this.props.openModal('signup')}>Sign up</button>
           <button onClick={() => this.props.openModal('login')}>Sign in</button>
        </nav>
      </>
    )
  }
        
  personalGreeting() {
    debugger
    const {reservations, currentUser, requestResvs, updateRes, deleteRes, fetchMusical} = this.props;
    
    return (
          <>
              <hgroup className="header-group">
                <div className = "ResDropdwn"> 
                <button>CalendarIcon
                <i className="far fa-calendar"> </i>   
                </button>
                <ReservationIndex
                  reservations = {reservations}
                  currentUser = {currentUser}
                  // fetchMusical = {fetchMusical}
                  requestResvs = {requestResvs}
                  limit = {5}
                />
                </div>
              <h2 className="header-name">Hi {this.props.currentUser.first_name}</h2>
              <button onClick={()=> this.props.logoutUser()}>Log Out</button>
            </hgroup>
          </>
        )
      }

  render (){
    const { currentUser, logoutUser } = this.props;
    // debugger
      if (currentUser != null ||currentUser != undefined){
               return (this.personalGreeting(currentUser));
            }
            else {
              return this.sessionLinks()
            }
          };
    
 }

// const Greeting = ({ currentUser, logoutUser, openModal }) => {

  
//   
  
  export default Greeting;
  
  
  
  