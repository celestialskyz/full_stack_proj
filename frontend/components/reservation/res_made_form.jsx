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
    
    const {reservation, updateRes, deleteRes, currentUserFname, mPic, clearPendingRes, receivePendingRes} = this.props;
    
    const lastpic = mPic["length"];
    const headPic = mPic[lastpic - 1];
    
    return(
      <>
          <ReservationsItem
          reservation = {reservation}
          mName = {reservation.mName}
          currentUser = {currentUserFname}
          updateRes = {updateRes}
          deleteRes = {deleteRes}
          clearPendingRes = {clearPendingRes}
          mPic= {headPic}
          key = {reservation.id}
          receivePendingRes = {receivePendingRes}
        />
      </>
    )
  }

}
export default ReservationMadeForm;