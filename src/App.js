import React from 'react';
import './App.css';
import './css/styles.css'
import rightRedJoycon from './images/right-red-joycon.svg';
import leftBlueJoycon from './images/left-blue-joycon.svg';
import CharacterCarousel from  './CharacterCarousel.js'

class App extends React.Component {

  constructor(props) {
    
    super(props);
  }

  render() {
    
    return (
    <div>
      <div className="wrapper">
        <div className="switch-wrapper">
          <div className="joy-con">
              <img src={leftBlueJoycon}/>
          </div>

          <div className="switch-screen-outer">
            
                <CharacterCarousel/>
          
          </div>

          <div className="joy-con">
              <img src={rightRedJoycon}/>
          </div>

        </div>
      </div>  
      <div id="warning-message">
        This web app is only viewable in landscape mode
      </div>
    </div>  
    );
  }
}

export default App;
