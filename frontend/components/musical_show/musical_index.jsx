import React from 'react';
import MusicalItem from './musical_item';

class MusicalIndex extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.fetchMusicals();
  }

  render () {
    const {musicals} = this.props;

    return(
      <>
        <ul>
          {
            musicals.map(musical =>(
              <MusicalItem
                musical ={musical}
                key={musical.id}
              />
            ))
          }
        </ul>
      </>
    );
  }
}

export default MusicalIndex;