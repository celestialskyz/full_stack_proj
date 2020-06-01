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

  componentDidMount(){
      if (!this.props.reserver_id){
        this.props.openModal('signup');
      }
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.reservation !== prevProps.reservation) {
  //     this.props.requestRes(this.props.reserver_id );
  //   }
  // }
      
  render(){
    
    const {reservation, updateRes, deleteRes, currentUserFname, mPic} = this.props;
    const lastpic = mPic["length"];
    const headPic = mPic[lastpic - 1];
    
    return(
      <>
          <ReservationsItem
          reservation = {reservation}
          currentUser = {currentUserFname}
          updateRes = {updateRes}
          deleteRes = {deleteRes}
          mPic= {headPic}
          key = {reservation.id}
        />
      </>
    )
  }

}
export default ReservationMadeForm;