import React from 'react';

class ReservationShow extends React.Component{
  constructor(props){
    //debugger
    super(props);
    }

  componentDidMount(){
      if (!this.props.reserver_id){
        this.props.openModal('signup');
      }
      this.props.requestRes(this.props.reservation.id);
  }

  render(){
    const {show_id, party_size, date, time} = this.props.reservation;
    const mName=  this.props.fetchMusical(show_id);
    
    return(
      <>
        <ReservationMadeForm 
          show_id = {show_id}
          party_size = {party_size}
          date ={date} 
          time ={time}
          mName = {mName}
          />
      </>
    )
  }
}

export default ReservationShow;