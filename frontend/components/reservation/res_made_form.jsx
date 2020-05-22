import {Redirect, Link} from 'react-router-dom';
import React from 'react';
import ReservationsItem from '../reservation_show/res_confirm_item';
//this itself is an protected route obj
class ReservationMadeForm extends React.Component{
  constructor(props){
    //debugger
    super(props);
    this.state = {
      res:{}
     };
    }

  componentDidMount(){
      if (!this.props.reserver_id){
        this.props.openModal('signup');
      }
  }
      
  render(){
    const {res, updateRes, deleteRes, requestUser} = this.props;

    return(
      <>
          <ReservationsItem
          reservation = {res}
          updateRes = {updateRes}
          requestUser = {requestUser}
          deleteRes = {deleteRes}
          key = {res.id}
        />
      </>
    )
  }

}
export default ReservationMadeForm;