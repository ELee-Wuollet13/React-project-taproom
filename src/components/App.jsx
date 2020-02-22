import React from 'react';
import Header from "./Header.jsx";
import PintList from './PintList.jsx';
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Error404 from "./Error404.jsx";
import NewPintControl from "./NewPintControl.jsx";
import Moment from 'moment';
import { Switch, Route, Router } from 'react-router-dom';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPintList: []
    };

    this.handleAddingNewPintToList = this.handleAddingNewPintToList.bind(this);
  }
  handleAddingNewPintToList(newPint){
    console.log('newPint: ', newPint);
    const newMasterPintList = this.state.masterPintList.slice();
    newMasterPintList.push(newPint);
    this.setState({masterPintList: newMasterPintList});
  }

  render() {
    return (
      <div className="App">
      <Navbar/>
      <div className="App-header">
      <Header/>
      <Switch>
      <div className="content">
      <Route exact path='/' render={()=><PintList pintList={this.state.masterPintList} />} />
      <Route path='/newpint' render={()=><NewPintControl onNewPintCreation={this.handleAddingNewPintToList} />} />
      <Route component={Error404} />
      </div>
      </Switch>
      </div>
      </div>
    );
  }
}



export default App;
