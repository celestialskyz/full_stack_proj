import {Redirect} from 'react-router-dom';
import React from 'react';
//this itself is an protected route obj
class ReservationConfirmForm extends React.Component{
  constructor(props){
    //debugger
    super(props);
    this.state = {
      userId: this.props.login,
      reserverPhoneN: "",
      occasion: "Everyday Dining",
      specialReq: ""
     };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if (!this.props.login){
      this.props.openModal('signup');
    }
  }

  update(field){
    return e=> this.setState({[field]:e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRes(this.state.userId, this.state.res);
  }

  render(){
  const {mName, psize, date, time} = this.props.res;
  const {currentUserFname, currentUserEmail} = this.props;
  
  const {reserverPhoneN, specialReq }= this.state;
   return(
    <>
      <h2> {"You're Almost Done!"}</h2>
      <div className = "musicalInfo">
        <h3>{mName}</h3>
          <div>{date}</div>
          <div>{psize}</div>
          <div>{time}</div>
      </div>
      <div>
        <h3>{currentUserFname}</h3> (Not {currentUserFname}?)
      </div>
      <form onSubmit={this.handleSubmit}>
        <p className = "ExtraUserInfo">
          <input type = "text" value={reserverPhoneN}  onChange={this.update('reserverPhoneN')} placeholder = "Phone number" ></input>
          <input type = "text" value={currentUserEmail}  onChange={this.update('currentUserEmail')} placeholder = "Email" ></input>
        </p>
        <select name="occasion" className="occasion" onChange={this.update('occasion')} defaultValue= "Everyday Dining" >
          <option value="Everyday Dining" >Everyday Dining</option>
          <option value="Date Night">Date Night</option>
          <option value="Friends Get Together" >Friends Get Together</option>
          <option value="Special Occasion" >Special Occasion</option>
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