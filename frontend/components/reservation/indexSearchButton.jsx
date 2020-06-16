import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class IndexSearchButton  extends React.Component{
  constructor(props){
    super(props)
    this.createTimes=this.createTimes.bind(this);
    this.redirectIt = this.redirectIt.bind(this);
  }

  redirectIt(musical, time, filterinfo){
    let mName = musical.name;
    let mPic = musical.photoUrls[musical.photoUrls.length - 1];
    let show_id = musical.id;
    
    this.props.handleSubmit({...filterinfo,time, mName, mPic, show_id});
    
    this.props.reserver_id ? this.props.history.push({pathname: "/musicals/confirmRes"}) : 
    this.props.openModal('signup');
  }

  createTimes(time){
    if (time === 0 || time === 2400){
      return "12:00AM";
    }
    else if(time === 1200){
      return '12:00PM';
    }
    return time > 1200 ? (time-1200).toString().slice(0, -2) +":" + (time-1200).toString().slice(-2) + "PM" :
                (time).toString().slice(0, -2) +":" + (time).toString().slice(1)+ "AM";
  }

  render(){
    const{timearr, musical, filterinfo}= this.props;
    return (
      <div className="searchbuttonDiv">
        {timearr.map(time => { 
          return(
          <button className= "search timebuttons" onClick={()=>this.redirectIt(musical, time, filterinfo)}>
          {this.createTimes(time)}
          </button>
        )})
        }
        
      </div>
    )

  }

}

export default withRouter(IndexSearchButton);