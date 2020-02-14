import React from 'react';
import './App.css';
import PintList from './PintList.jsx';
import PintListEmp from './PintListEmp.jsx';
import  Navbar from "./Navbar.jsx";
import  Header from "./Header.jsx";
import Home from "./Home.jsx";
import { Switch, Route, Router } from 'react-router-dom';

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
    <Navbar/>
    <Header/>
    </header>
    <Switch>
    <div className="content">
    <Route exact path="/" component={Home}/>
    <Route exact path="/PintList" component={PintList}/>
    <Route exact path="/PintListEmp" component={PintListEmp}/>
    </div>
    </Switch>
    <div style={menu}>

    </div>
    </div>
  );
}



export default App;
