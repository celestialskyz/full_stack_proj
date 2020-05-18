import React from 'react';
import FilterForm from './filter_form';

const MusicalSearch = ({query, updateFilter, klass})=>{
  
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