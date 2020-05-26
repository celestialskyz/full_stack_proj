import React, { Component } from  'react';
import MusicalIndexContainer from './musical_index/musical_index_container';
import MusicalSearchContainer from './search/search_container';
import {connect} from 'react-redux';

const MainComponent = (props)=>{
  const {klass} = props;
  return(
    <div className = {`main ${klass}`}>
      <MusicalSearchContainer />
      <MusicalIndexContainer/>
    </div>
    
  )
  
}

const msp = (state)=>{
  return({
    : state.ui.filters.inputQ ? "search" : "home"
  });
};
 

export default connect(msp)(MainComponent);