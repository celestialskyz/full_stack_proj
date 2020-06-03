import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import TimesForm from "./reservation_confirm_form";
// import { LinkforId } from '../../util/link_util';
import ReservationConfirmed from "./reservation_confirm_form";
import moment from 'moment';

class ResForm extends React.Component{
  constructor(props){
    super(props);
    this.state = this.props.filters;
   
    this.createButtons = this.createButtons.bind(this);
    this.createTimes = this.createTimes.bind(this);
    this.redirectIt = this.redirectIt.bind(this);
  }

redirectIt(musical, time){
  // debugger
  let mName = musical.name;
  let mPic = musical.photoUrls[musical.photoUrls.length - 1];
  let show_id = musical.id;
  
  this.props.handleSubmit({...this.state,time, mName, mPic, show_id});
   
  if (jQuery.isEmptyObject(this.props.reserver_id)){
    
    this.props.openModal('signup');
  }
  else {
  this.props.history.push({
      pathname: `/musicals/confirmRes`
    });
  }
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

  update(field){
    return e=> this.setState({[field]:e.target.value});
  }

  createButtons(musical, timearr){
  let fixheight = document.getElementById("resform");
  fixheight.classList.add("timebutton");
  let parent = document.getElementById("putButtonsHere");
  
   let buttonh = document.createElement("div");
   var newHead = document.createTextNode("Select a Time:"); 
  //  let linked = document.createElement("div");
   newHead.className = "newheader";
   buttonh.appendChild(newHead);
   parent.appendChild(buttonh);
  //  parent.appendChild()
   let findbutton = document.getElementById("firstFind");
    findbutton.remove();
    timearr.forEach(time => {
      var newbutton = document.createElement('button');
      newbutton.innerHTML = this.createTimes(time);
      newbutton.className = "timebuttons";
      newbutton.addEventListener("click", (event) =>{
        event.preventDefault();
        this.redirectIt(musical, time)})
      parent.appendChild(newbutton);
    });   
  }

  renderErrors() {
    return(
      <ul>
        {this.state.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    const {musical, kclass} = this.props;
    const {date, party_size, time} = this.state;
    
    let timearr = [];
    let rangestart = time-200;    
    if (time === 0){
      rangestart = 2200;
    }
    else if (time === 100){ //0100
      rangestart = 2100;
    }
    let otherTime= (rangestart).toString().slice(0,-2);
    // debugger
    let addhr = parseInt(otherTime)*100;
      for (let i = 0; i<5; i++){
         addhr = addhr + 100;
         timearr.push(addhr)  
        if (addhr >= 2400){ 
          timearr.push('0000');
          timearr.push('0030');
        }
        else{
          timearr.push(addhr + 30);

        }
      }
    
    
    return(
      <div className = {`res-small-form ${kclass}`}>
        <div id="resform">
          <div className = {"res-head"}>
            <h1>Make a reservation</h1>
          </div>
          <form  >
            <label className = "psizehead">Party Size
              <select key = "partys" className="partys" className="res-drop" defaultValue={this.state.description} placeholder='2' onChange={this.update('party_size')}>
              {/* defaultValue='2' */}
                  <option key="partys1" value='1' >1 </option> 
              {/* for select item must be string convert later */}
                  <option key="partys2" value='2' >2 </option>
                  <option key="partys3" value='3' >3 </option>
                  <option key="partys4" value='4' >4 </option>
                  <option key="partys5" value='5' >5 </option>
                  <option key="partys6" value='6' >6 </option>
                  <option key="partys7" value='7' >7 </option>
                  <option key="partys8" value='8' >8 </option>
                  <option key="partys9" value='9' >9 </option>
                  <option key="partys10" value='10' >10 </option>
                  <option key="partys11" value='11' >11 </option>
                  <option key="partys12" value='12' >12 </option>
                  <option key="partys13" value='13' >13 </option>
                  <option key="partys14" value='14' >14 </option>
                  <option key="partys15" value='15' >15 </option>
                  <option key="partys16" value='16' >16 </option>
                  <option key="partys17" value='17' >17 </option>
                  <option key="partys18" value='18' >18 </option>
                  <option key="partys19" value='19' >19 </option>
                  <option key="partys20" value='20' >20 </option>
              </select>
            </label>
            <div className = "horizalign">
              <div className="datinginput">
                <label>Date</label>
                
                <input className= "datewidth" type="date" value={date} onChange= {this.update('date')} />
              </div>
              <div className="timinginput">
                <label>Time</label>
                {/* for select item must be string convert later */}
                  <select key = "time" name="time" className="time-drop"  value={time} onChange={this.update('time')}>
                    {timearr.map(time =>(
                      <option key= {time} value ={time} > {this.createTimes(time)}
                      </option>
                    ))}
                    {/* { {nonMilitaryT.map( time =>(
                      <option key= {time} value = {time.toString()}> {this.createTimes(time)}
                      {{ time > 1200 ? (time-1200).toString().slice(0, 1) +":" + (time-1200).toString().slice(1) + "PM" :
                      (time).toString().slice(0, 1) +":" + (time).toString().slice(1)+ "AM"} }
                      </option> }
                    ))
                    } */}
                  </select>
              </div>
            </div>
              {/* <button >
              <div>Find a Seat</div>
            </button> */}
            <button id="firstFind" onClick = { () => this.createButtons(musical, timearr)}>
              <div className="find">Find a Seat</div>
            </button>
            <div id = "putButtonsHere"></div>
            </form>
        </div>
    </div>
    )
  }

}
export default withRouter(ResForm);