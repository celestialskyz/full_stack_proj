import React from 'react';

class MusicalMap extends React.Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
      const mapOptions = {
          center:{lat: this.props.musical.lat, lng: this.props.musical.lng},
          zoom: 500
        };
   this.map = new google.maps.Map(this.mapNode, mapOptions);
  //  this.MarkerManager = new MarkerManager(this.map);
  var theatre = {lat: this.props.musical.lat, lng: this.props.musical.lng};
	var marker = new google.maps.Marker({
			position: theatre,
			map: this.map,
			title: `${this.props.musical.name}`
			});
  }
  
  render (){

    return(
      <>
    <div id = "right-side map">
      <label>
        <div id="map-container" ref="map">
          <div ref={map => this.mapNode = map} className="map"></div>
        </div>
        {this.props.musical.address} {this.props.musical.city}
      </label>
    </div>   
      </>
    )

  }

}

export default MusicalMap;