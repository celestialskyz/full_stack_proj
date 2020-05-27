import React from 'react';
import ReservationIndexItem from './listed_index_res';

class ReservationIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      reservations: this.props.reservations
    }
  }
  
  componentDidMount(){
    // if (this.props.currentUser != null ||this.props.currentUser != undefined){
   this.props.requestResvs(this.props.currentUser.id);
      // }
  }
  update(field){
    return e=> this.setState({[field]: e.target.value});
  }

  render(){
    debugger
    const {reservations, updateRes, currentUser, deleteRes, fetchMusical} = this.props;
   
    if (reservations.length === 0) {
      return (<div></div>);
    }

    // debugger
    if (this.props.limit > 0 && reservations.length > 5){
    var limited = reservations.slice(0,5).map(function(res){
    debugger
    res.resName
     return(
        <>
           <ReservationIndexItem
            key = {res.id}
            reservation= {res}
            currentUser ={currentUser}
            // musicalN = {musicalN}
            fetchMusical = {fetchMusical}
          />
       </>
      )
    })}
    else {
      var limited = this.state.reservations.map(function(res, index){
       return(
         <>
            <ReservationIndexItem
              key = {index}
              reservation= {res}
              currentUser ={currentUser}
              // fetchMusical = {fetchMusical}
            />
          </>
        )
      })
    }
      
    return (
     <>
      <ul className = "dropdown-resvs">
        <h3 className= "upcoming-list">UPCOMING</h3>
       <div>
         {limited}
       </div>

          {/* {this.state.reservations.map(function(res, index){
              ;
             return(
               <>
                  <ReservationIndexItem
                    key = {index}
                    reservation= {res}
                    currentUser ={currentUser}
                    fetchMusical = {fetchMusical}
                            />
                      </>
                    )
                })
          }  */}
      </ul>
    </>
    )
  }
}

export default ReservationIndex;