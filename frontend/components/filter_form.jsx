import React from 'react';
// import { Redirect } from 'react-router';
import { Redirect } from 'react-router-dom';
// import { updateFilter } from '../actions/filter_actions';

class FilterForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      // time:"",
      inputQ:""
    };
    let addClass = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
    
    handleSubmit(e){
      e.preventDefault();
      const query= Object.assign({}, this.state); 
      // debugger
      this.props.updateFilter(query);
    }

    handleInput(type){
      return(e)=>{
        this.setState({[type]: e.currentTarget.value.toString()});
      };
    }
   
  render(){
    // debugger
    const {inputQ, updateFilter} = this.props;
    
    return (
      <header className = "searchy">
      <form onSubmit ={this.handleSubmit} className = "formFilter" >
        <div className="searcher">
          <label>Find your musical for any occasion</label>
          <div className="lineup">
            <section className= "fillin">
              <input type="date" className= "date"></input>
              <select name="time" className="time-drop" defaultValue='19:00' onChange={this.handleInput('time')}>
                <option value="0000">12.00 AM</option>
                <option value="0030">12.30 AM</option>
                <option value="0100">01.00 AM</option>
                <option value="0130">01.30 AM</option>
                <option value="0200">02.00 AM</option>
                <option value="0230">02.30 AM</option>
                <option value="0300">03.00 AM</option>
                <option value="0330">03.30 AM</option>
                <option value="0400">04.00 AM</option>
                <option value="0430">04.30 AM</option>
                <option value="0500">05.00 AM</option>
                <option value="0530">05.30 AM</option>
                <option value="0600">06.00 AM</option>
                <option value="0630">06.30 AM</option>
                <option value="0700">07.00 AM</option>
                <option value="0730">07.30 AM</option>
                <option value="0800">08.00 AM</option>
                <option value="0830">08.30 AM</option>
                <option value="0900">09.00 AM</option>
                <option value="0930">09.30 AM</option>
                <option value="1000">10.00 AM</option>
                <option value="1030">10.30 AM</option>
                <option value="1100">11.00 AM</option>
                <option value="1130">11.30 AM</option>
                <option value="1200">12.00 PM</option>
                <option value="1230">12.30 PM</option>
                <option value="1300">01.00 PM</option>
                <option value="1330">01.30 PM</option>
                <option value="1400">02.00 PM</option>
                <option value="1430">02.30 PM</option>
                <option value="1500">03.00 PM</option>
                <option value="1530">03.30 PM</option>
                <option value="1600">04.00 PM</option>
                <option value="1630">04.30 PM</option>
                <option value="1700">05.00 PM</option>
                <option value="1730">05.30 PM</option>
                <option value="1800">06.00 PM</option>
                <option value="1830">06.30 PM</option>
                <option value="1900">07.00 PM</option>
                <option value="1930">07.30 PM</option>
                <option value="2000">08.00 PM</option>
                <option value="2030">08.30 PM</option>
                <option value="2100">09.00 PM</option>
                <option value="2130">09.30 PM</option>
                <option value="2200">10.00 PM</option>
                <option value="2230">10.30 PM</option>
                <option value="2300">11.00 PM</option>
                <option value="2330">11.30 PM</option>
              </select>
              <select name="partys" className="partys-drop" defaultValue='2 people' onChange={this.handleInput('partys')}>
                <option value='1' >1 person</option>
                <option value='2' >2 people</option>
                <option value='3' >3 people</option>
                <option value='4' >4 people</option>
                <option value='5' >5 people</option>
                <option value='6' >6 people</option>
                <option value='7' >7 people</option>
                <option value='8' >8 people</option>
                <option value='9' >9 people</option>
                <option value='10' >10 people</option>
                <option value='11' >11 people</option>
                <option value='12' >12 people</option>
                <option value='13' >13 people</option>
                <option value='14' >14 people</option>
                <option value='15' >15 people</option>
                <option value='16' >16 people</option>
                <option value='17' >17 people</option>
                <option value='18' >18 people</option>
                <option value='19' >19 people</option>
                <option value='20' >20 people</option>
              </select>
              </section>
              <input
              className = "texting"
            type="query"
            value={inputQ}
            onChange={this.handleInput('inputQ')}/>
          <button className="" type="submit">Let's go</button>
          </div>
        </div>
      </form>
    </header>
    );
  }
}
export default FilterForm;