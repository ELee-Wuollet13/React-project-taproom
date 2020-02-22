import React from "react";
import Header from "./Header";
import PintList from "./PintList";
import NewPintControl from './NewPintControl';
import Error404 from './Error404';
import Moment from 'moment';
import { Switch, Route } from 'react-router-dom';
import EditPint from './EditPint.jsx';
import Navbar from './Navbar.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterPintList: []
    };

      this.handleAddingNewPintToList = this.handleAddingNewPintToList.bind(this);
  }
  handleAddingNewPintToList(newPint){
    const newMasterPintList = this.state.masterPintList.slice();
    newPint.formattedWaitTime = (newPint.timeOpen).fromNow(true)
    newMasterPintList.push(newPint);
    this.setState({
      masterPintList: newMasterPintList
    });
  }


  handleAddingEditPintToList =(editPint) =>{

    console.log(this.getIndex);
    const editMasterPintList = this.state.masterPintList.slice(1);
    console.log('masterPintList: ', this.state.masterPintList);
    console.log('editMasterPintList: ', editMasterPintList);
    editPint.formattedWaitTime = (editPint.timeOpen).fromNow(true)
    editMasterPintList.push(editPint);
    console.log('editMasterPintList: ', editMasterPintList);
    this.setState({
      masterPintList: editMasterPintList
    });
  }

  updatePintElapsedWaitTime() {
     console.log("check");
     let newMasterPintList = this.state.masterPintList.slice();
     newMasterPintList.forEach((pint) =>
       pint.formattedWaitTime = (pint.timeOpen).fromNow(true)
     );
     this.setState({masterPintList: newMasterPintList})
   }

   componentDidMount() {
     this.waitTimeUpdateTimer = setInterval(() =>
       this.updatePintElapsedWaitTime(),
       5000
     );
  }
  componentWillUnmount(){
  clearInterval(this.waitTimeUpdateTimer);
}

  render(){
    return (
      <div>

        <Header/>
          <Switch>
            <Route exact path='/' render={()=><PintList pintList={this.state.masterPintList} />} />
            <Route path='/NewPint' render={()=><NewPintControl onNewPintCreation={this.handleAddingNewPintToList} />} />
            <Route path='/EditPint' render={()=><EditPint onEditPintCreation={this.handleAddingEditPintToList} />} />
            <Route component={Error404} />
          </Switch>
      </div>
    );
  }
}

export default App;
