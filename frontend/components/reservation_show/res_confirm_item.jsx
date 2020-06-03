import React from 'react';
var dateFormat = require('dateformat');
import {Link, Redirect} from "react-router-dom";

class ReservationsItem extends React.Component{
  constructor(props){
    
    super(props);
    this.createTimes = this.createTimes.bind(this);
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
  render (){
    
    const {reservation, currentUser, mPic, updateRes, deleteRes, currentUserFname, mName} = this.props;      
    const {party_size, date, time, show_id} = reservation;
      
    return(
      <>
      <div className = "confirmed">
        <div className="greenConfirm">
        <i className="fas fa-check-circle icon-large"></i>
          <h2 className="done"> Thanks, {currentUserFname}! Your reservation is confirmed.</h2>
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
          <Link to='/musicals/:musicalId/reservations/:resId/edit'>
            Modify
          </Link>

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
