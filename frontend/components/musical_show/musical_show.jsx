import React from 'react';
import MusicalDetail from './musical_detail';
class MusicalShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchMusical();
  }

  render(){
    const {musical} = this.props;
    
    return(
      <>
        <MusicalDetail
          musical={musical}
          key = {musical.id}
        />
      {/* <MusicalReservation> */}
      {/* <MusicalReviews> */}

      </>
    )

  }


}
export default MusicalShow;