import {Redirect} from 'react-router-dom';
import React from 'react';
//this itself is an protected route obj
class ReservationConfirmForm extends React.Component{
  constructor(props){
    //debugger
    super(props);
    this.state = {
      reserverPhoneN: "",
      occasion: "Everyday Dining",
      specialReq: ""
     };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createTimes = this.createTimes.bind(this);

  }

  componentDidMount(){
    debugger
    if (!this.props.reserver_id){
      this.props.openModal('signup');
    }
  }

  update(field){
    return e=> this.setState({[field]:e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    let otherprops = Object.assign(this.props.reservation,{reserver_id: this.props.reserver_id}, this.state);
   
    // debugger
    this.props.submitEvent(otherprops).then(this.props.history.push({
      pathname: `/musicals/ResMade`
    }))
  }
  
  createTimes(time){
    // debugger
    return time > 1200 ? (time-1200).toString().slice(0, -2) +":" + (time-1200).toString().slice(-2) + "PM" :
                (time).toString().slice(0, -2) +":" + (time).toString().slice(1)+ "AM";
  }

  render(){
  const {mName, party_size, date, time} = this.props.reservation;
  const {currentUserFname, currentUserEmail} = this.props;
  
  const {reserverPhoneN, specialReq }= this.state;
   return(
    <>
      <h2> {"You're Almost Done!"}</h2>
      <div className = "musicalInfo">
        <h3>{mName}</h3>
          <div>{date}</div>
          <div>{party_size}</div>
          <div>{this.createTimes(time)}</div>
      </div>
      <div>
        <h3>{currentUserFname}</h3> (Not {currentUserFname}?)
      </div>
      <form onSubmit={this.handleSubmit}>
        <p className = "ExtraUserInfo">
          <input type = "text" value={reserverPhoneN}  onChange={this.update('reserverPhoneN')} placeholder = "Phone number" ></input>
          <input type = "text" value={currentUserEmail}  onChange={this.update('currentUserEmail')} placeholder = "Email" ></input>
        </p>
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
            />
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