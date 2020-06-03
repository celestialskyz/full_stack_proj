import React from 'react';
import ReservationsItem from './res_confirm_item';

class ReservationShow extends React.Component{
  constructor(props){
    super(props);
    }

  componentDidMount(){
    debugger
    this.props.requestRes(this.props.reserver_id, this.props.match.params.resId);
    // console.log("req the res")
    this.props.fetchMusical(this.props.match.params.musicalId);
    // console.log("fetch the musical")
    // if (!this.props.reserver_id){
    //  this.props.openModal('signup'); }
   }

  render(){
    const {reservation, musical, updateRes, deleteRes, reserver_id, currentUserFname, clearPendingRes} = this.props;
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
          currentUser = {reserver_id}
          currentUserFname = {currentUserFname}
          clearPendingRes = {clearPendingRes}
          updateRes = {updateRes}
          deleteRes = {deleteRes}
          mName = {musical.name}
          mPic = {musical.photoUrls[musical.photoUrls.length - 1]}
          key = {reservation.id}
          />
      </>
    )
  }
}

export default ReservationShow;