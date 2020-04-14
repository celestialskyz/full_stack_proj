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
      <>
      <form onSubmit ={this.handleSubmit} className = "formFilter" >
        <label>Find your musical for any occasion</label>
        <input type="date"></input>
        <select name="time" className="time-drop" defaultValue='19:00' onChange={this.handleInput('time')}>
          <option value="00:00">12.00 AM</option>
          <option value="00:30">12.30 AM</option>
          <option value="01:00">01.00 AM</option>
          <option value="01:30">01.30 AM</option>
          <option value="02:00">02.00 AM</option>
          <option value="02:30">02.30 AM</option>
          <option value="03:00">03.00 AM</option>
          <option value="03:30">03.30 AM</option>
          <option value="04:00">04.00 AM</option>
          <option value="04:30">04.30 AM</option>
          <option value="05:00">05.00 AM</option>
          <option value="05:30">05.30 AM</option>
          <option value="06:00">06.00 AM</option>
          <option value="06:30">06.30 AM</option>
          <option value="07:00">07.00 AM</option>
          <option value="07:30">07.30 AM</option>
          <option value="08:00">08.00 AM</option>
          <option value="08:30">08.30 AM</option>
          <option value="09:00">09.00 AM</option>
          <option value="09:30">09.30 AM</option>
          <option value="10:00">10.00 AM</option>
          <option value="10:30">10.30 AM</option>
          <option value="11:00">11.00 AM</option>
          <option value="11:30">11.30 AM</option>
          <option value="12:00">12.00 PM</option>
          <option value="12:30">12.30 PM</option>
          <option value="13:00">01.00 PM</option>
          <option value="13:30">01.30 PM</option>
          <option value="14:00">02.00 PM</option>
          <option value="14:30">02.30 PM</option>
          <option value="15:00">03.00 PM</option>
          <option value="15:30">03.30 PM</option>
          <option value="16:00">04.00 PM</option>
          <option value="16:30">04.30 PM</option>
          <option value="17:00">05.00 PM</option>
          <option value="17:30">05.30 PM</option>
          <option value="18:00">06.00 PM</option>
          <option value="18:30">06.30 PM</option>
          <option value="19:00">07.00 PM</option>
          <option value="19:30">07.30 PM</option>
          <option value="20:00">08.00 PM</option>
          <option value="20:30">08.30 PM</option>
          <option value="21:00">09.00 PM</option>
          <option value="21:30">09.30 PM</option>
          <option value="22:00">10.00 PM</option>
          <option value="22:30">10.30 PM</option>
          <option value="23:00">11.00 PM</option>
          <option value="23:30">11.30 PM</option>
        </select>
          <input
          type="query"
          value={inputQ}
          onChange={this.handleInput('inputQ')}/>
        <button type="submit">Let's go</button>
      </form>
    </>
    );
  }
}
export default FilterForm;