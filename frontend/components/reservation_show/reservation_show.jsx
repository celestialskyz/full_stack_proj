import React from 'react';
import ReservationsItem from './res_confirm_item';

class ReservationShow extends React.Component{
  constructor(props){
    super(props);
    }

  componentDidMount(){
    debugger
    this.props.requestRes(this.props.reserver_id, this.props.match.params.resId);
    debugger
    this.props.fetchMusical(this.props.match.params.musicalId);
    if (!this.props.reserver_id){
     this.props.openModal('signup'); }
   }

  render(){
    const {reservation, musical, updateRes, deleteRes, reserver_id, currentUserFname} = this.props;
    debugger

   if (!musical || !reservation) {
     return (<div></div>);
   }
   else {
     debugger
    let mPic = musical.photoUrls[musical.photoUrls.length - 1];
   }

    // this.props.currentUserFname;
    return(
      <>
          <ReservationsItem
          reservation = {reservation}
          currentUser = {reserver_id}
          currentUserFname = {currentUserFname}
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