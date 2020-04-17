import React, { useEffect } from  'react';
import MusicalIndexContainer from './musical_index/musical_index_container';
import MusicalSearchContainer from './search/search_container';
import {connect} from 'react-redux';
import {initialFetchMusicals} from '../actions/musical_actions';
// import {MusicalIndex} from './musical_index/musical_index';

const indexed = (props)=>{
  const {klass} = props;
  
  if (klass === 'home'){
    
    useEffect(() => {
     props.initialFetchMusicals();
    }, []);

    
   } 
    return (
    <div className = {`main ${klass}`}>
    <MusicalSearchContainer />
    <MusicalIndexContainer/>
   
  </div>)
  

}


const msp = (state)=>{
  return({
    klass: state.ui.filters.inputQ ? "search" : "home"
  });
};

const mdp = (dispatch)=>{
  return({
    initialFetchMusicals: ()=>dispatch(initialFetchMusicals())
  });
};

export default connect(msp,mdp)(indexed);