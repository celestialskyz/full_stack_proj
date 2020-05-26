import React from 'react';
import {Link} from "react-router-dom";

class ReservationIndexItem extends React.Component{
  constructor(props){
    //debugger
    super(props);
    this.createTimes = this.createTimes.bind(this);
  }
  componentDidMount(){
    debugger
    this.props.fetchMusical(this.props.currentUser.id);
    debugger
  }

  createTimes(time){
    return time > 1200 ? (time-1200).toString().slice(0, -2) +":" + (time-1200).toString().slice(-2) + "PM" :
                (time).toString().slice(0, -2) +":" + (time).toString().slice(1)+ "AM";
  }

  render(){
    debugger
    const {reservation, musical} =this.props;
    const {party_size, date, time} = reservation;
    debugger
    return(
      <>
      <li>
        <div>      
          <h2 className ="list-res-musical">{musical.name}</h2>
          <div> Table for {party_size} people</div> 
          <div>{date}</div> <div>{this.createTimes(time)}</div>
          <Link to = {`/musicals/reservations/${reservation.id}`}>
          <div>View </div>
          </Link>
        </div>
      </li>
      
      </>
    )
  }



};


export default ReservationIndexItem;