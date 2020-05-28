import React from 'react';
import {Link} from "react-router-dom";
var dateFormat = require('dateformat');

class ReservationIndexItem extends React.Component{
  constructor(props){
    //debugger
    super(props);
    this.createTimes = this.createTimes.bind(this);
  }
  // componentDidMount(){
  //  //debugger
  //  this.props.fetchMusical(this.props.currentUser.id);
  //  //debugger
  // }

  createTimes(time){
    return time > 1200 ? (time-1200).toString().slice(0, -2) +":" + (time-1200).toString().slice(-2) + "PM" :
                (time).toString().slice(0, -2) +":" + (time).toString().slice(1)+ "AM";
  }

  render(){
    
    const {reservation, currentUser, updateRes, deleteRes} =this.props;
    // musical
    const {resName, party_size, date, time, show_id} = reservation;
  
    return(
      <>
      <li>
        <div className="resInfodop">      
        <Link to ={`/musicals/${show_id}`}>
          <h5 className ="list-res-musical">{resName}</h5>
        </Link>
          <div className="details-res">
            <div> Seating for {party_size} </div> 
            <div className = "date-time-drop">{dateFormat(date, "mediumDate")}
            <div>{this.createTimes(time)}</div>
            </div> 
          </div>  
        <div className="links">
            <Link to = {`/musicals/${show_id}/reservations/${reservation.id}`}>
              <div>View </div>
            </Link>
            {/* <button onClick = {()=>{updateRes(reservation.id)}}>Modify</button> */}

            {/* <button onClick = {()=>{deleteRes(reservation.id)}}>Delete</button> */}
          </div>
        </div>
      </li>
      
      </>
    )
  }



};


export default ReservationIndexItem;