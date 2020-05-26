import React from 'react';

class ReservationShow extends React.Component{
  constructor(props){
    //debugger
    super(props);
    }

  componentDidMount(){
      if (!this.props.reserver_id){
        this.props.openModal('signup'); }
      this.props.requestRes(this.props.reserver_id, this.props.reservation.id);
      this.props.fetchMusical(this.props.reservation.show_id);
  }

  render(){
    const {reservation, musical, updateRes, deleteRes, reserver_id} = this.props;
   
    // this.props.currentUserFname;
    return(
      <>
          <ReservationsItem
          reservation = {reservation}
          currentUser = {reserver_id}
          updateRes = {updateRes}
          deleteRes = {deleteRes}
          mName = {musical.name}
          key = {reservation.id}
        />
      </>
    )
  }
}

export default ReservationShow;