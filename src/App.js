import React from 'react';
import './App.css';
import PintList from './PintList.jsx';
import PintListEmp from './PintListEmp.jsx';
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import NewKegForm from "./NewKegForm.jsx";
import Moment from 'moment';
import { Switch, Route, Router } from 'react-router-dom';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };

    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }
  handleAddingNewKegToList(newKeg){
    console.log('newKeg: ', newKeg);
    // const position = this.indexOf()
    const newMasterKegList = this.state.masterKegList.slice();
    // console.log('masterKegList: ', this.state.masterKegList);
    // console.log('newMasterKegList: ', newMasterKegList);
    newKeg.formattedWaitTime = (newKeg.timeOpen).fromNow(true)
    newMasterKegList.push(newKeg);
    // console.log('newMasterKegList: ', newMasterKegList);
    this.setState({
      masterKegList: newMasterKegList
    });
  }

  // handleAddingEditKegToList =(editKeg) =>{
    //
    //   console.log(this.getIndex);
    //   const editMasterKegList = this.state.masterKegList.slice(1);
    //   console.log('masterKegList: ', this.state.masterKegList);
    //   console.log('editMasterKegList: ', editMasterKegList);
    //   editKeg.formattedWaitTime = (editKeg.timeOpen).fromNow(true)
    //   editMasterKegList.push(editKeg);
    //   console.log('editMasterKegList: ', editMasterKegList);
    //   this.setState({
      //     masterKegList: editMasterKegList
      //   });
      // }

      updateKegElapsedWaitTime() {
        console.log("check");
        let newMasterKegList = this.state.masterKegList.slice();
        newMasterKegList.forEach((keg) =>
        keg.formattedWaitTime = (keg.timeOpen).fromNow(true)
      );
      this.setState({masterKegList: newMasterKegList})
    }

    componentDidMount() {
      this.waitTimeUpdateTimer = setInterval(() =>
      this.updateKegElapsedWaitTime(),
      5000
    );
  }
  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }


  render() {
    return (
      <div className="App">
      <Navbar/>
      <div className="App-header">
      <Header/>
      <Switch>
      <div className="content">
      <Route exact path="/" component={Home}/>
      <Route exact path="/PintList" component={PintList}/>
      <Route exact path="/PintListEmp" component={PintListEmp}/>
      <Route exact path="/NewKegFrom" component={NewKegForm}/>

      </div>
      </Switch>
      </div>
      </div>
    );
  }
}



export default App;
