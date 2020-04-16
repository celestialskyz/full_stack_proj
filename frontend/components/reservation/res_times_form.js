import {Link} from 'react-router-dom';
import React from 'react';

const TimesForm= ({time})=>{
  const timearr = [];
  timearr.push(time-100);
  timearr.push(time-30);
  timearr.push(time+100);
  timearr.push(time+30);
  timearr.push(time+30);

  return(
    <> 
      <ul>
        {
          timearr.map( time =>(
            <li key = {time}>
              <Link to ={`/api/reservations`} >{musical.name}</Link>
              <button className= "times">{time}</button>
            </li>
          ))
        }
      </ul>
    </>

  );
};