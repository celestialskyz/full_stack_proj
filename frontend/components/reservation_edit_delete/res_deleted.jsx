import React from 'react';
import {Link} from "react-router-dom";
import musical_index_container from '../musical_index/musical_index_container';
var dateFormat = require('dateformat');

class DeleteRes extends React.Component{
  constructor(props){
    super(props);
    this.createTimes = this.createTimes.bind(this);
  }

  componentDidMount(){
   this.props.requestResvs(this.props.currentUser.id);
  }

  createTimes(time){
  if (time === 0 || time === 2400){
    return "12:00AM";
  }
  else if(time === 1200){
    return '12:00PM';
  }
  else if(time === 30){
    return '12:30AM';
  }  
  return time > 1200 ? (time-1200).toString().slice(0, -2) +":" + (time-1200).toString().slice(-2) + "PM" : 
              (time).toString().slice(0, -2) +":" + (time).toString().slice(1)+ "AM";
  }

  render(){
    const {reservation, reservations, deleteRes, musical} =this.props;
    // const myres = reservation[0];
    
    if (reservations.length === 0 || !reservations ) {
      return (<></>)
    }
    const {party_size, date, time} = reservation;
    // = myres;
    const mban = musical.photoUrls[musical.photoUrls.length - 1];
          
      return(
        <>
          <section className = "deleteIt">
            <div className = "Sure" >Cancel Your Reservation</div>
            <section className = "headerdelete">
              <img className="picdelete"
                src={mban}
              ></img>
            <section className = "detailed">
              <div> GUESTS
                <div>{party_size} people</div>
              </div>
              <div> DATE
                <div className = "datedelete">{dateFormat(date, "UTC: mmm d, yyyy")}</div>
              </div>
              <div> TIME
                <div className = "timedelete">{this.createTimes(time)}</div>
              </div>
              <div> MUSICAL
                <div className = "mNamedelete">
                  <Link to ={`/musicals/${musical.id}`}>{musical.name}</Link>
                </div>
              </div>
            </section>
          </section>
            <button  className = "deleteplz" onClick = {()=>{
              deleteRes(reservation.reserver_id, reservation.id).then(this.props.history.push({
                pathname: `/musicals/${musical.id}/reservations/${reservation.reserver_id}`
              }));
              }}>Cancel Reservation</button>
             
          </section>
        </>
      )
  }

}
export default DeleteRes;