import React from 'react';
import TimesForm from "./reservation_confirm_form";

class ResForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     inputQ:props.filters.inputQ,
     date: props.filters.date,
     psize: props.filters.psize,
     time: props.filters.time,
     userid: props.userid,
     usern: props.usern
    };  

    this.createButtons = this.createButtons.bind(this);
    this.createTimes = this.createTimes.bind(this);
    this.redirect = this.redirect.bind(this);

    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleSubmit(e){
  //   e.preventDefault();

  //   //this.setState({psize: parseInt(this.state.psize)})
  //   //create res in the 2nd screen not here //make it a link to the reserve page passing parameters through
  //   this.props.createRes(this.state.userId, this.state.res);
  // }

  redirect(musical){
    const reserv = Object.assign({musicalId : musical.id, musicalName: musical.name, userid: props.userid, createRes : this.props.createRes}, this.state);
    <Redirect to={{
      pathname:`/${musicalId}/confirmRes`,
      createRes: this.props.createRes,
      state: reserv
    }}
    />
  }

  createTimes(time){
    return time > 1200 ? (time-1200).toString().slice(0, 1) +":" + (time-1200).toString().slice(1) + "PM" :
                (time).toString().slice(0, 1) +":" + (time).toString().slice(1)+ "AM"
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
   newHead.className = "newheader";
   buttonh.appendChild(newHead);
   parent.appendChild(buttonh);
   let findbutton = document.getElementById("firstFind");
    findbutton.remove();
    timearr.forEach(time => {
      var button = document.createElement('button');
      button.innerHTML = this.createTimes(time);
      button.className = "timebuttons";
      // debugger
      button.onClick = () => this.redirect(musical);
      parent.appendChild(button);
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
    const {musical} = this.props;
   const {inputQ, date, psize, time} = this.state;
      //1900
   const timearr = [];
   timearr.push(time-200); //1800
    timearr.push(time-170);
    timearr.push(time-100); //1800
    timearr.push(time-70);  // 
    timearr.push(time);
    timearr.push(time+30);
    timearr.push(time+100);
    timearr.push(time+130);
    timearr.push(time+200);
    timearr.push(time+230);
    
 // debugger
    return(
      <>
      <div id="resform">
        <div className = "res-head">
          <h1>Make a reservation</h1>
        </div>
        <form  >
          <label className = "psizehead">Party Size
            <select key = "partys" name="partys" className="res-drop" value= {psize} onChange={this.update('partys')}>
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
          <label>Date
           <input type="date" value={date} onChange= {this.update('date')} />
          </label>
          <label>Time
          {/* for select item must be string convert later */}
            <select key = "time" name="time" className="time-drop"  value={time} onChange={this.update('time')}>
              {timearr.map( time =>(
                <option key= {time} value = {time.toString()}> {this.createTimes(time)}
                {/* { time > 1200 ? (time-1200).toString().slice(0, 1) +":" + (time-1200).toString().slice(1) + "PM" :
                (time).toString().slice(0, 1) +":" + (time).toString().slice(1)+ "AM"} */}
                </option>
              ))
              }
            </select>
          </label>
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
      </>
    )
  }

}

export default ResForm;