import React from 'react';

class ResForm extends React.Component{
  constructor(props){
    super(props);
    this.state = props.filters;
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createRes(this.state.userId, this.state.res);

  }
  update(field){
    return e=> this.setState({[field]: e.target.value});
  }

  render(){
    const {musical, userId, inputQ, date, psize, time} = this.props;
   
    
    return(
      <>
        <h1>Make a reservation</h1>
        <form onSubmit = {this.handleSubmit} >
          <label>Party Size
            <select name="partys" className="res-drop" value= {psize} onChange={this.update('partys')}>
            <option value='1' >1 </option>
                <option value='2' >2 </option>
                <option value='3' >3 </option>
                <option value='4' >4 </option>
                <option value='5' >5 </option>
                <option value='6' >6 </option>
                <option value='7' >7 </option>
                <option value='8' >8 </option>
                <option value='9' >9 </option>
                <option value='10' >10 </option>
                <option value='11' >11 </option>
                <option value='12' >12 </option>
                <option value='13' >13 </option>
                <option value='14' >14 </option>
                <option value='15' >15 </option>
                <option value='16' >16 </option>
                <option value='17' >17 </option>
                <option value='18' >18 </option>
                <option value='19' >19 </option>
                <option value='20' >20 </option>
            </select>
          </label>
          <label>Date
          <input type="date" value={date} onChange= {this.update('date')} />
          </label>
          <label>Time
          {/* <select name="time" className="time-drop" defaultValue='19:00' onChange={this.handleInput('time')}> </select> */}
            {/* {<TimesForm 
                time= {t}
              >} */}
          </label>
        <button type="submit"></button>
        </form>
      </>
    )
  }

}

export default ResForm;