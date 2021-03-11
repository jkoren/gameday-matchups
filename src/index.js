import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

const reactContentRoot = document.getElementById("root")

const App = () => {
  return (
    <div className="App">
      <div className="titles">
        <h1>Gameday Matchups</h1>
        <h2>New England at Atlanta</h2>
        <h2>9/9/2021</h2>
      </div>
      <div className="container">
        <img src="https://jkorenstein-production.s3.amazonaws.com/football-gameday-player-matchups/American_Football_Positions_no_names.png" alt="Football" width="70%"/> 
 
        {/* offense */}
        <div className="offenseteam"><b>New England</b></div>
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

        {/* defense */}
        <div className="defenseteam"><b>Atlanta</b></div>
        <div className="leftcornerback">Kendall Sheffield/LCB</div>
        <div className="leftsafety">Demontae Kazee/S</div>
        <div className="rightsafety">Sharrod Neasman/S</div>
        <div className="rightcornerback">Isaiah Oliver/RCB</div>
        <div className="leftoutsidelinebacker">Foyesade Oluokon/LB</div>
        <div className="rightoutsidelinebacker">Isaiah Oliver/LB</div>
        <div className="middlelinebacker">Mykal Walker/LB</div>
        <div className="leftdefensiveend">Charles Harris/LDE</div>
        <div className="leftdefensivetackle">Grady Jarrett/LDT</div>
        <div className="rightdefensivetackle">Tyeler Davison/RDT</div>
        <div className="rightdefensiveend">Dante Fowler Jr./RDE</div>

        {/* <div>Copyright © 2021 Jeff Korenstein</div> */}
      </div>
    </div>
  )
}

ReactDOM.render(<App />, reactContentRoot)