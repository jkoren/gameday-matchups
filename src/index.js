import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const reactContentRoot = document.getElementById("root")

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <img src="https://jkorenstein-production.s3.amazonaws.com/football-gameday-player-matchups/American_Football_Positions_no_names.png" alt="Football" width="70%"/> 
        {/* <img src="https://jkorenstein-production.s3.amazonaws.com/football-gameday-player-matchups/American_Football_Positions.jpg" alt="Football" width="70%"/>  */}
        <div className="team"><b>New England</b></div>
        <div className="quarterback">Cam Newton/QB</div>
        <div className="fullback">Damien Harris/RB</div>
        <div className="halfback">James White/RB</div>
        <div className="leftwidereceiver">N'Keal Harry/WR</div>
        <div className="rightwidereceiver">Damiere Byrd/WR</div>
        <div className="lefttackle">Jermain Eluemunor/LT</div>
        <div className="leftguard">Joe Thuney/LG</div>
        <div className="center">David Andrews/C</div>
        <div className="rightguard">Shaq Mason/RG</div>
        <div className="righttackle">Mike Onwenu/RT</div>
        <div className="tightend">Devin Asiasi/TE</div>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, reactContentRoot)