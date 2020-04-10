import React from 'react';

class MarkerManager extends React.Component{
  constructor(props){
    super(props);
    this.map = map;
    this.markers = {};

    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(musicals){
    console.log("time to update");
  }

  render() {


    return(
      <>
        <div>Hello</div>
      </>
    )

  }


}

export default MarkerManager;