import {Redirect} from 'react-router-dom';
import React from 'react';
var dateFormat = require('dateformat');

//this itself is an protected route obj
class ReservationConfirmForm extends React.Component{
  constructor(props){
    // debugger
    super(props);
    this.state = {
      reserverPhoneN: "",
      occasion: "Everyday Dining",
      specialReq: ""
     };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTimes = this.createTimes.bind(this);

  }

  update(field){
    return e=> this.setState({[field]:e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let otherprops = Object.assign(this.props.reservation,{reserver_id: this.props.reserver_id}, this.state);
    
    this.props.submitEvent(otherprops).then(()=>
      { 
      return(this.props.history.push({
      pathname: `/musicals/${this.props.reservation.show_id}/ResMade`
       //Need some way to get id of reservation
      // /reservations/${res.id}
    }))}
      );
  }
  
  createTimes(time){ 
  if (time === 0 || time === 2400){
    return "12:00AM";
  }
  else if(time === 1200){
    return '12:00PM';
  }
  return time > 1200 ? (time-1200).toString().slice(0, -2) +":" + (time-1200).toString().slice(-2) + "PM" :
              (time).toString().slice(0, -2) +":" + (time).toString().slice(1)+ "AM";
}

  render(){
  const {mName, mPic, party_size, date, time} = this.props.reservation;
  const {currentUserFname, currentUserEmail} = this.props;
  debugger
  const {reserverPhoneN, specialReq }= this.state;
   return(
    <>
      <h4 className= "almost"> {"You're Almost Done!"}</h4>
      <div className = "musicalInfo">
        <div className="sidebyside">
          <img className="picmini2"
                src={mPic}
          ></img>
            <h3>{mName}</h3>
      </div>
          <div className= "infolisthorz">
            <div><i className="far fa-calendar"> </i> <div className="iconInfo">{dateFormat(date, "UTC: ddd, mmm, d")}</div></div>
            <div><i className="far fa-user"></i><div className="iconInfo">{party_size} people</div></div>
            <div><i className="far fa-clock"></i> <div className="iconInfo"> {this.createTimes(time)}</div></div>
          </div>
      </div>
      <div className="dets"> User Details</div>
      <div className="user">
        <h3>{currentUserFname}</h3>
         {/* (Not {currentUserFname}?) */}
      </div>
      <form className="confirmForm" onSubmit={this.handleSubmit}>
        <p className = "ExtraUserInfo">
          <input type = "text" value={reserverPhoneN}  onChange={this.update('reserverPhoneN')} placeholder = "Phone number" ></input>
          <input type = "text" value={currentUserEmail}  onChange={this.update('currentUserEmail')} placeholder = "Email" ></input>
        </p>
        <div className="secondrowInfo">
          <select name="occasion" className="occasion" onChange={this.update('occasion')} defaultValue= "Select an occasion(optional)" >
            <option value="Select an occasion(optional)">Select an occasion(optional)</option>
            <option value="Birthday" >Birthday</option>
            <option value="Date Night">Date Night</option>
            <option value="Anniversary" >Anniversary</option>
            <option value="Business Meal" >Business Meal</option>
            <option value="Celebration" >Celebration</option>

          </select>
          <input
                type="text"
                value={specialReq}
                onChange={this.update('specialReq')}
                className="specialReq"
                placeholder = "Add special request (optional)"
              /> 
        </div>
           <button className="complete-res-button"  >
              Complete Reservation
            </button>
       </form>
    </>
    )
  }

}
// make the NOT a link
export default ReservationConfirmForm;