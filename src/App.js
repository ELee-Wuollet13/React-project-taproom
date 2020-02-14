import React from 'react';
import './App.css';
import PintList from './PintList.jsx';
import KegList from './KegList.jsx';
import Header from './Header.jsx';


var leftColumn = {
  width: "31%",
  border: "2px solid",
  borderColor: "green",
  position: "absolute",
  left: "1.5%",
  height: "898px",
}

var centerColumn = {
  marginTop: "7%",
  width: "31%",
  border: "4px solid",
  borderRadius: "40%",
  borderColor: "green",
  position: "absolute",
  left: "34.5%",
  zIndex: "+1"
}

var rightColumn = {
  width: "31%",
  border: "2px solid",
  borderColor: "green",
  position: "absolute",
  left: "67.5%",
  height: "898px",
}
var dirtStyle = {
  color: "#663300",
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 style={dirtStyle}>Danny Dirtfarmer's practical keg</h1>
      <div className="row">
        <div style={leftColumn}>
          <PintList/>
        </div>
        <div style={rightColumn}>
        <KegList/>
        </div>
      </div>
      </header>
    </div>
  );
}



export default App;
