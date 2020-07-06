import React from 'react';
import MusicalItem from './musical_item';
import IndexSearchButton from "../reservation/indexSearchButton";
class MusicalIndex extends React.Component{
  constructor(props){
    super(props);
    this.searchIndex = this.searchIndex.bind(this);
    this.homepageIndex = this.homepageIndex.bind(this);
  }
  componentDidMount(){
    this.props.fetchMusicals();
  }

  homepageIndex(){
    const {musicals} = this.props;
    return (<>
        <h3 className = "homey"> Today's Top Picks</h3>
        <ul className = "homeMusicals">
          { musicals.slice(0,5).map(musical =>{
          return(
              <MusicalItem 
                key = {musical.id}
                musical = {musical}
              />
            )})
          }
        </ul>
        <footer>
        <div className = "about">
          <h3>Lianne Bisch</h3>
          <ul className="home-social-list">
            <li>
                <a href="https://github.com/celestialskyz" target="_blank"> Github <i className="fa fa-github"></i></a>
            </li>
            <li> 
                <a href="https://www.linkedin.com/in/lianne-bisch/" target="_blank">Linkedin <i className="fa fa-linkedin"></i></a>
            </li>
            <li> 
                <a href="https://angel.co/u/lianne-bisch" target="_blank">Angellist <i className="fa fa-angellist"></i></a>
            </li>
            <li> 
                <a href="mailto:lannybys@gmail.com" target="_blank">Email<i className="fa fa-envelope"></i></a>
            </li>
        
          </ul>
        </div>
    </footer>
    </>)
  }

  searchIndex(){
    const {musicals, klass, time, handleSubmit, filterinfo, openModal, currentUserId} = this.props;
    
    let timearr = [];
    let rangestart = time-200;    
    if (time === 0){
      rangestart = 2200;
    }
    else if (time === 100){ //0100
      rangestart = 2100;
    }
    let otherTime= (rangestart).toString().slice(0,-2);
    // debugger
    let addhr = parseInt(otherTime)*100;
      for (let i = 0; i<3; i++){
         addhr = addhr + 100;
         timearr.push(addhr)  
        if (addhr >= 2400){ 
          timearr.push('0000');
          timearr.push('0030');
        }
        else{
          timearr.push(addhr + 30);
        }
      }
      return (
      <>
        <ul className = "homeMusicals">
          { musicals.map(musical =>{
          return(
            <div className="keeptogether">
              <MusicalItem 
                key = {musical.id}
                musical = {musical}
              />
              <div className = {`${klass}index`}>
                
                <IndexSearchButton
                  timearr = {timearr}
                  musical = {musical}
                  handleSubmit = {handleSubmit}
                  filterinfo = {filterinfo}
                  openModal = {openModal}
                  reserver_id = {{[currentUserId]:currentUserId} }
                 />
              </div>
            </div>
            )})
          }
        </ul>


        {/* <aside className = "sidebar">
          <div className = "money">
            <i className="fas fa-money-bill"></i>
                Price
            <div className="moneyButton">
              <button>$$</button>
              <button>$$$</button>
              <button>$$$$</button>
            </div>
          </div>
        </aside> */}
        </>
    )
  }
  render () {
   const {klass} = this.props;
   if (klass === "home"){
    return (this.homepageIndex())
   }
   else{
    return (this.searchIndex())
   }
  }
}

export default MusicalIndex;