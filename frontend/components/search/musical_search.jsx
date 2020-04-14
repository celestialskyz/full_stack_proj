import React from 'react';
import FilterForm from '../filter_form';

const MusicalSearch = ({musicals, query, updateFilter, klass})=>{
  
  let unused = true;
  return(
   
    <div className = {klass}>
      <FilterForm
        inputQ = {query}
        updateFilter = {updateFilter}

      />
    </div>

  )
}

export default MusicalSearch;