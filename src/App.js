import React from 'react';
import './App.css';
import PintList from './PintList.jsx';
import PintListEmp from './PintListEmp.jsx';
import newKeg from './newKeg.jsx';
import  Navbar from "./Navbar.jsx";
import  Header from "./Header.jsx";
import Home from "./Home.jsx";
import { Switch, Route, Router } from 'react-router-dom';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };

    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }
  handleAddingNewTicketToList(newTicket){
    console.log('newTicket: ', newTicket);
    // const position = this.indexOf()
    const newMasterTicketList = this.state.masterTicketList.slice();
    // console.log('masterTicketList: ', this.state.masterTicketList);
    // console.log('newMasterTicketList: ', newMasterTicketList);
    newTicket.formattedWaitTime = (newTicket.timeOpen).fromNow(true)
    newMasterTicketList.push(newTicket);
    // console.log('newMasterTicketList: ', newMasterTicketList);
    this.setState({
      masterTicketList: newMasterTicketList
    });
  }


  // handleAddingEditTicketToList =(editTicket) =>{
    //
    //   console.log(this.getIndex);
    //   const editMasterTicketList = this.state.masterTicketList.slice(1);
    //   console.log('masterTicketList: ', this.state.masterTicketList);
    //   console.log('editMasterTicketList: ', editMasterTicketList);
    //   editTicket.formattedWaitTime = (editTicket.timeOpen).fromNow(true)
    //   editMasterTicketList.push(editTicket);
    //   console.log('editMasterTicketList: ', editMasterTicketList);
    //   this.setState({
      //     masterTicketList: editMasterTicketList
      //   });
      // }

      updateTicketElapsedWaitTime() {
        console.log("check");
        let newMasterTicketList = this.state.masterTicketList.slice();
        newMasterTicketList.forEach((ticket) =>
        ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
      );
      this.setState({masterTicketList: newMasterTicketList})
    }

    componentDidMount() {
      this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
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
      <Route exact path="/newKeg" component={newKeg}/>

      </div>
      </Switch>
      </div>
      </div>
    );
  }
}



export default App;
