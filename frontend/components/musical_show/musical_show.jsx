import React from 'react';
import MusicalDetail from './musical_detail';
import MusicalMap from './musical_map';
import MusicalDetail2 from './musical_detail2';
class MusicalShow extends React.Component{
  constructor(props){
    super(props);
    debugger
  }

  componentDidMount(){
    debugger
    this.props.fetchMusical(this.props.match.params.musicalId);
    debugger
  }

  render(){
    const {musical, fetchMusical} = this.props;
    debugger
    if (!musical) {
      return <div></div>;
    }
    
    const mban = musical.photoUrls[musical.photoUrls.length-1];
    const phtos = musical.photoUrls.slice(0, -1);

    
      return(
        <>
       {/* <img src=  */}
      <div className="white"> </div>
       <div className = "banner">
         <img className = "picbanner"
          src = {mban}
         ></img>
       </div>
          <MusicalDetail
            musical={musical}
            key = {musical.id}
          />
    
     
          <section className = "right-side">
            {/* <MusicalReservation> */}
          <MusicalMap
            musical = {musical}
          />
         <MusicalDetail2
            musical = {musical}
          /> 
          </section>

        <div className="photos">
            <h2>Photos</h2>
            <section className = "allphotos">
              <ul>
              {phtos.map ((pic, idx)=>{
                return (
                  <li key = {`${pic}+${idx}`}>
                    <img
                    className = "pict"
                    id = {`pic${idx}`}
                    src = {pic}
                    ></img>
                  </li>
                )
              })
              }</ul>
         
       
        </section>
         </div>
         
          
        {/* <MusicalReviews> */}

        </>
      )
    
  }


}
export default MusicalShow;