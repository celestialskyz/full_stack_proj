import React from 'react';
import {Link} from "react-router-dom";

class DeleteRes extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
   this.props.requestResvs(this.props.currentUser.id);
  }

  render(){
    debugger
    const {reservation, deleteRes} =this.props;

    if (reservations.length === 0 || !reservations) {
      return (<></>)
    }

    return (
      <>
        <div className = "deleteIt">
          <div className = "Sure" >Are you Sure you want to delete your reservation?</div>
          <button  className = "deleteit" onClick = {()=>{deleteRes(reservation.id)}}>Yes</button>
          <button className = "dontdelete" onClick = {()=>{this.props.history.push({
          pathname: `/musicals/${reservation.reserver_id}/reservations/${reservation.id}`})}}>No</button>
        </div>
      </>
    )
  }

}
export default DeleteRes;