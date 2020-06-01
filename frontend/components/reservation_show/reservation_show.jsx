import React from 'react';
import ReservationsItem from './res_confirm_item';

class ReservationShow extends React.Component{
  constructor(props){
    super(props);
    }

  componentDidMount(){
    
    this.props.requestRes(this.props.reserver_id, this.props.match.params.resId);
    
    this.props.fetchMusical(this.props.match.params.musicalId);
    if (!this.props.reserver_id){
     this.props.openModal('signup'); }
   }

  render(){
    const {reservation, musical, updateRes, deleteRes, reserver_id} = this.props;
    let mPic = musical.photoUrls[musical.photoUrls.length - 1];

   if (!musical || !reservation) {
     return (<div></div>);
   }

    // this.props.currentUserFname;
    return(
      <>
          <ReservationsItem
          reservation = {reservation}
          currentUser = {reserver_id}
          updateRes = {updateRes}
          deleteRes = {deleteRes}
          mName = {musical.name}
          mPic = {mPic}
          key = {reservation.id}
          />
      </>
    )
  }
}

export default ReservationShow;