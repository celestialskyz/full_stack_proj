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
    // debugger
    return(
      <>
        <h3 className = "homey"> Today's Top Picks</h3>
        <ul className = "homeMusicals">
          {
            musicals.map(musical =>{
              debugger
          return(
            <MusicalItem 
              key = {musical.id}
              musical = {musical}
             />
            )})
        }
        </ul>

        <aside className = "sidebar">
          <div className = "money">
            <i className="fas fa-money-bill"></i>
                Price
            <div className="moneyButton">
              <button>$$</button>
              <button>$$$</button>
              <button>$$$$</button>
            </div>
          </div>
        </aside>
      </>
    );
  }
}

export default MusicalIndex;