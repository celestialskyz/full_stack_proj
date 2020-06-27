import React from 'react';
import {Link, Redirect} from "react-router-dom";
import ReservationIndex from '../components/reservation_index/reservation_index';
// import ReservationIndexContainer from '../components/reservation_index/reservation_index_container';
class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.personalGreeting = this.personalGreeting.bind(this);
  }
  componentDidMount(){
   this.props.initialFetchMusicals();
   
    if (this.props.currentUser != null ||this.props.currentUser != undefined){

      this.props.requestResvs(this.props.currentUser.id).catch(error=> {
  
        console.log(error);
      });
      }
  }
  
  sessionLinks(){
    return (
      <>
        <nav className="login-signup">
           <button onClick={() => this.props.openModal('signup')}><div className= "signbuttons">Sign up</div></button>
           <button onClick={() => this.props.openModal('login')}><div className= "signbuttons" >Sign in</div></button>
        </nav>
      </>
    )
  }
        
  personalGreeting() {
    const {reservations, currentUser, requestResvs, updateRes, deleteRes, fetchMusical} = this.props;

    return (
          <>
              <hgroup className="header-group">
                <div className = "horizontal-greeting"> 
                  <div className = "ResDropdwn"> 
                    <button className = "calendar-drop">
                      <i className="far fa-calendar fa-2x"> </i>   
                    </button>
                    {/* <div className = "ResDropdwnHide"> */}
                    <ReservationIndex
                      reservations = {reservations}
                      currentUser = {currentUser}
                      requestResvs = {requestResvs}
                      updateRes = {updateRes}
                      deleteRes = {deleteRes}
                      limit = {3}
                    />
                      {/* <ReservationIndexContainer/> */}
                    {/* </div> */}
                  </div>
              
                <h2 className="header-name">Hi {this.props.currentUser.first_name}</h2>
               </div>
               <div className="logout-plz">
              <button onClick={()=> {
                this.props.logoutUser();
              }}>Log Out</button>
              </div>
            </hgroup>
          </>
        )
      }

  render (){
    const { currentUser, logoutUser } = this.props;
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
  
  
  
  