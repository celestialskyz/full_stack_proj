import React from 'react';
import MusicalDetail from './musical_detail';
import MusicalMap from './musical_map';

class MusicalShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchMusical(this.props.match.params.musicalId);
  }

  render(){
    const {musical, fetchMusical} = this.props;
    if (!musical) {
      return <div></div>;
    }
    else {
      return(
        <>
          <MusicalDetail
            musical={musical}
            key = {musical.id}
          />
          <section className = "right-side">
          <MusicalMap
            musical = {musical}
            
          />
          
        {/* <MusicalReservation> */}
        </section>
        
        {/* <MusicalReviews> */}

        </>
      )
    }
  }


}
export default MusicalShow;