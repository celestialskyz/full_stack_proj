import {Link} from 'react-router-dom';
import React from 'react';
//this itself is an auth routed obj
class ReservationConfirmForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     show_id: props.musicalId,
     musicalName: props.musicalName,
     party_size: props.psize,
     date: props.date,
     time: props.time,
     reserver_id: props.userid,
     reservern: props.usern
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e=> this.setState({[field]:e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRes(this.state.userId, this.state.res);
  }

  render(){
   const {reserver_id, reservern, show_id, musicalName, party_size, date, time} = this.state;
  
   return(
    <>
      <h2> You're Almost Done!</h2>
        <div>
          <h3 className = "musicaln"> {musicalName}</h3>
          <div className="confirmhead">
            <div>{date}</div>
            <div>{party_size}</div>
            <div>{time}</div>
          </div>
          {reservern} (Not {reservern}?) //make the not a link
        </div>
    </>
    )

  }

}

export default ReservationConfirmForm;