import React from 'react';
import './App.css';
import PintList from './PintList.jsx';
import PintListEmp from './PintListEmp.jsx';
import  Navbar from "./Navbar.jsx";
import  Header from "./Header.jsx";
import Home from "./Home.jsx";
import { Switch, Route, Router } from 'react-router-dom';


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
    </div>
  );
}



export default App;
