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
   const {reservations, updateRes, deleteRes, currentUser} = this.props;
     return(
     <>
      <ul>
      {reservations.map(res=>{
       const musical = this.props.fetchMusical(reservations.show_id);
        return(
        <ReservationsItem
        reservation = {res}
        currentUser = {currentUser}
        mName = {musical.name}
        updateRes = {updateRes}
        deleteRes = {deleteRes}
        key = {res.id}
        />
        )
      })
          }
      </ul>
     </>
    )
  }