import React from 'react';
import MusicalItem from './musical_item';

class MusicalIndex extends React.Component{
  constructor(props){
    super(props);
  }
  // componentDidMount(){
  //   this.props.fetchMusicals();
  // }

  render () {
    // debugger
    const {musicals} = this.props;

    return(
      <>
        <ul>
          {
            musicals.map(musical =>(
            <MusicalItem 
              key = {musical.id}
               musical = {musical}
             />
            ))
        }
        </ul>
      </>
    );
  }
}

export default MusicalIndex;