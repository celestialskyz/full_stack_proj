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
            <li key = {time}> <button className= "times">{time}</button></li>
          ))
        }
      </ul>
    </>

  );
};