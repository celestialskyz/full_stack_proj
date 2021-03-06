import React from 'react';
import {Link} from "react-router-dom";
var dateFormat = require('dateformat');

class ReservationIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.createTimes = this.createTimes.bind(this);
  }
  // componentDidMount(){
  //  //
  //  this.props.fetchMusical(this.props.currentUser.id);
  //  //debugger
  // }

  createTimes(time){if (time === 0 || time === 2400){
    return "12:00AM";
  }
  else if(time === 1200){
    return '12:00PM';
  }
  else if(time === 30){
    return '12:30AM';
  }
  
  return time > 1200 ? (time-1200).toString().slice(0, -2) +":" + (time-1200).toString().slice(-2) + "PM" : 
              (time).toString().slice(0, -2) +":" + (time).toString().slice(1)+ "AM";}

  render(){
   
    const {reservation, currentUser, updateRes, deleteRes, currentUserFname} =this.props;
    // musical
   
    const {mName, party_size, date, time, show_id} = reservation;
      if(!reservation){
          return(<div>You have no upcoming reservations</div>)
      }
    return(
      <>
      <li>
        <div className="resInfodop">      
        <Link to ={`/musicals/${show_id}`}>
          <h5 className ="list-res-musical">{mName}</h5>
        </Link>
          <div className="details-res">
            <div> Seating for {party_size} </div> 
            <div className = "date-time-drop">{dateFormat(date, "UTC: mmm d, yyyy")}
            <div>{this.createTimes(time)}</div>
            </div> 
          </div>  
        <div className="links">
            <Link to = {`/musicals/${show_id}/reservations/${reservation.id}`}>
              <div>View </div>
            </Link>
            <Link to = {`/musicals/${show_id}/reservations/${reservation.id}/edit`}>
              <div>Modify </div>
            </Link>
            <Link to = {`/musicals/${show_id}/reservations/${reservation.id}/delete`}>
               <div>Delete</div>
            </Link>
            {/* <button onClick = {()=>{deleteRes(reservation.reserver_id, reservation.id)}}>Cancel</button> */}
          </div>
        </div>
      </li>
      
      </>
    )
  }



};


export default ReservationIndexItem;