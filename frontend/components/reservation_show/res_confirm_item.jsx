import React from 'react';
var dateFormat = require('dateformat');
import {Link, Redirect} from "react-router-dom";
import ResForm from "../reservation/new_reservation_form";

// import EditResFormContainer from '../reservation_edit_delete/edit_reservation_form_container'
class ReservationsItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      edit: false,
    };
    this.createTimes = this.createTimes.bind(this);
    this.clickButton = this.clickButton.bind(this);
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

  componentWillUnmount(){
    this.props.clearPendingRes();
  }

  clickButton(){
    this.setState({edit:true});
  }

  render (){
    
    const {musical, reservation, mPic, updateRes, deleteRes, currentUser, mName, kclass} = this.props;      
    debugger
    const {party_size, date, time, show_id} = reservation;
      
    return(
      <>
      <div className = "confirmed">
        <div className="greenConfirm">
        <i className="fas fa-check-circle icon-large"></i>
          <h2 className="done"> Thanks, {currentUser}! Your reservation is confirmed.</h2>
        </div>
        <div className="InfoDone">
          <div className="InfoHead">
            <img className="picmini"
                    src={mPic}
                  ></img>
              <h2 className="mNameDone">{mName}</h2>
          </div>
          <div className= "listconfirminfo">
                <div><i className="far fa-calendar"> </i> <div className="iconInfo">{dateFormat(date, "dddd, mmm d")}</div></div>
                <div><i className="far fa-clock"></i> <div className="iconInfo"> {this.createTimes(time)}</div></div>
          </div>
          <div className="people"><i className="far fa-user"></i><div className="iconInfo">{party_size} people</div></div>
          <button onClick = {this.clickButton} > Modify </button>
           <div>
             {this.state.edit? <ResForm
              musical = {musical}
              filters = {this.props.reservation}
              handleSubmit = {this.props.receivePendingRes}
              reserver_id = {this.props.reserver_id}
              openModal = {this.props.openModal}
              kclass = {"editp"}
              /> : <> </>}
           </div>
          <Link to='/musicals/deleted'>
            Cancel
          </Link>
          </div>
        </div>
      </>
    )
  }

}

export default ReservationsItem;
