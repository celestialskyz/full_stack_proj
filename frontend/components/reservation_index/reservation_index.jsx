import React from 'react';
import ReservationsItem from '../reservation_show/res_confirm_item';

class ReservationIndex extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestResvs();
  }

  render(){
   const {reservations, updateRes, deleteRes, requestUser} = this.props;
     return(
     <>
      <ul>
      {reservations.map(res=>(
        <ReservationsItem
        reservation = {res}
          updateRes = {updateRes}
          deleteRes = {deleteRes}
          requestUser = {requestUser}
          fetchMusical = {fetchMusical}
          key = {res.id}
        />
      ))
          }
      </ul>
     </>
    )
  }