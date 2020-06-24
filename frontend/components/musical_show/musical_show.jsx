import React from 'react';
import MusicalDetail from './musical_detail';
import MusicalMap from './musical_map';
import MusicalDetail2 from './musical_detail2';
import { Link, animateScroll as scroll } from "react-scroll";

import ResForm from '../reservation/new_reservation_form';

class MusicalShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMusical(this.props.match.params.musicalId);
  }

  render() {
    
    const { musical, kclass } = this.props;
    if (!musical) {
      return (<div></div>);
    }

    const mban = musical.photoUrls[musical.photoUrls.length - 1];
    const phtos = musical.photoUrls.slice(0, -1);
    
    return (
      <>
        {/* <img src=  */}
        <div className="banner">
          <img className="picbanner"
            src={mban}
          ></img>
        </div>
        <div className = "inbanner">
          <nav className = "detailNav">
          <ul className = "little_tabs">
            {/* <li><a class="smoothscroll"key = "Overview" href="#about" title="about">Overview</a></li> */}
            <li key = "Overview" title="about">Overview</li>

            {/* <li key ="Specials">Specials</li> */}
            {/* <li><a class="smoothscroll" key ="Photos" href="#photos" title="photos">Photos</a></li> */}

            <li key ="Photos" title="photos">Photos</li>
            {/* <a href="#pics" className="scroll-icon smoothscroll">  */}
            {/* FIX */}
                {/* <span>Photos</span> */}
            {/* </a> */}
            {/* <li key ="Photos">Photos */}
            <li key ="Reviews" >Reviews</li>
          </ul>
        </nav> 
      </div>
      <div className = "align">
        <div className = "leftside">
       
        <MusicalDetail
          musical={musical}
          key={musical.id}
        />
        <a name="pics">
         
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
          
        </a>
      </div>
        <section className="right-side">
          {/* <MusicalReservation> */}
          
          <ResForm
            musical = {musical}
            filters = {this.props.filters}
            handleSubmit = {this.props.handleSubmit}
            reserver_id = {this.props.reserver_id}
            openModal = {this.props.openModal}
            kclass={kclass}
          />
          <MusicalMap
            musical={musical}
          />
          <MusicalDetail2
            musical={musical}
          />
        </section>
      </div>

        {/* <MusicalReviews> */}

      </>
    )

  }


}
export default MusicalShow;
