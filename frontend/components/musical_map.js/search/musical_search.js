import React from 'react';
import MusicalIndexContainer from '../../musical_index/musical_index_container';
class MusicalSearch extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div>
        <MusicalIndexContainer/>
        {/* SearchContainer */}
      </div>
    )
  }

}