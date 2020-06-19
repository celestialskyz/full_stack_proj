import {Redirect, Link} from 'react-router-dom';
import React from 'react';
import ReservationsItem from '../reservation_show/res_confirm_item';
//this itself is an protected route obj
class ReservationMadeForm extends React.Component{
  constructor(props){
    //debugger
    super(props);
    // this.state = {
    //   reservation:{}
    //  };
    }

  // componentDidMount(){
  //     if (!this.props.reserver_id){
  //       this.props.openModal('signup');
  //     }
  // }
      
  render(){
    
    const {reservation, openModal, musical,currentUserFname, mPic, clearPendingRes, handleSubmit} = this.props;
    // debugger
    const lastpic = mPic["length"];
    const headPic = mPic[lastpic - 1];
    
    return(
      <>
          <ReservationsItem
          musical = {musical}
          reservation = {reservation}
          mName = {reservation.mName}
          currentUser = {currentUserFname}
          clearPendingRes = {clearPendingRes}
          openModal = {openModal}
          mPic= {headPic}
          key = {reservation.id}
          handleSubmit = {handleSubmit}
        />
      </>
    )
  }

}
export default ReservationMadeForm;