import React from 'react';
import './App.css';
import PintList from './PintList.jsx';
import PintListEmp from './PintListEmp.jsx';
import Header from './Header.jsx';
// import Navbar from './Navbar.jsx';

var menu = {
  width: "80%",
  border: "2px solid",
  borderColor: "blue",
  position: "absolute",
  left: "1.5%",
  height: "898px",
  margin: "8%",
}

const header = {
  width: "100%",
}

function App() {
  return (
    <div className="App">

      <header className="App-header">
      <div style={header}>
      // <Navbar/>
        <Header/>
      </div>
      <div className="row">
        <div style={menu}>
          <PintList/>
          <PintListEmp/>
        </div>

      </div>
      </header>
    </div>
  );
}



export default App;
