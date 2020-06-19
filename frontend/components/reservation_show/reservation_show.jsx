import React from 'react';
import ReservationsItem from './res_confirm_item';

class ReservationShow extends React.Component{
  constructor(props){
    super(props);
    }

  componentDidMount(){
    this.props.requestRes(this.props.reserver_id, this.props.match.params.resId);
    // console.log("req the res")
    this.props.fetchMusical(this.props.match.params.musicalId);
   
   }

  render(){
    const {reservation, musical, openModal, updateRes, reserver_id, handleSubmit, deleteRes, currentUser, clearPendingRes} = this.props;
   if (!musical || !reservation) {
     return null;
   }
   else {
    let mPic = musical.photoUrls[musical.photoUrls.length - 1];
   }
    debugger
    // this.props.currentUserFname;
    return(
      <>
          <ReservationsItem
          reservation = {reservation}
          musical = {musical}
          currentUser = {currentUser}
          clearPendingRes = {clearPendingRes}
          updateRes = {updateRes}
          deleteRes = {deleteRes}
          reserver_id = {reserver_id.id}
          openModal = {openModal}
          mName = {musical.name}
          mPic = {musical.photoUrls[musical.photoUrls.length - 1]}
          key = {reservation.id}
          handleSubmit = {handleSubmit}
          />
      </>
    )
  }
}

export default ReservationShow;