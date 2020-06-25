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
    const {reservation, reservations, deleteRes} =this.props;
    
    const myres = reservation[0];
    if (reservations.length === 0 || !reservations ) {
      return (<></>)
    }
debugger
    return (
      <>
        <div className = "deleteIt">
          <div className = "Sure" >Are you Sure you want to delete your reservation?</div>
          <button  className = "deleteplz" onClick = {()=>{
            deleteRes(myres.reserver_id, myres.id).then(this.props.history.push({
              pathname: `/`
            }));
            }}>Yes</button>
          <button className = "dontdelete" onClick = {()=>{this.props.history.push({
          pathname: `/musicals/${myres.reserver_id}/reservations/${myres.id}`})}}>No</button>
        </div>
      </>
    )
  }

}
export default DeleteRes;