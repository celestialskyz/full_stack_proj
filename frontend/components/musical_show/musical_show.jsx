import React from 'react';
import MusicalDetail from './musical_detail';
import MusicalMap from './musical_map';
import MusicalDetail2 from './musical_detail2';

import ResForm from '../reservation/new_reservation_form';

class MusicalShow extends React.Component {
  constructor(props) {
    super(props);
    //debugger
  }

  componentDidMount() {
    //debugger
    this.props.fetchMusical(this.props.match.params.musicalId);
    //debugger
  }

  render() {
    const { musical } = this.props;
    //debugger
    if (!musical) {
      return (<div></div>);
    }

    const mban = musical.photoUrls[musical.photoUrls.length - 1];
    const phtos = musical.photoUrls.slice(0, -1);
    // debugger

    return (
      <>
        {/* <img src=  */}
        <div className="white"> </div>
        <div className="banner">
          <img className="picbanner"
            src={mban}
          ></img>
        </div>
        <MusicalDetail
          musical={musical}
          key={musical.id}
        />


        <section className="right-side">
          {/* <MusicalReservation> */}
          {/* <ResForm
            musical = {musical}
            filters = {this.props.filters}
          /> */}
          <MusicalMap
            musical={musical}
          />
          <MusicalDetail2
            musical={musical}
          />
        </section>

        <div className="photos">
          <h2>Photos</h2>
            <div className="row">
                {phtos.map((pic, idx) => {
                  return (
                    <div className="column" key={`${pic}+${idx}`}>
                      <img
                        className="photograph"
                        id={`pic${idx}`}
                        src={pic}
                      />
                    </div>
                  )
                })}
            </div>
        </div>

        {/* <MusicalReviews> */}

      </>
    )

  }


}
export default MusicalShow;
