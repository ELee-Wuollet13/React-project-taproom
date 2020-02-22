import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions.jsx';
import NewPintForm from './NewPintForm.jsx';
import PropTypes from "prop-types";

class NewPintControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleEmployeeVarifyingConfirmation = this.handleEmployeeVarifyingConfirmation.bind(this);
  }

  handleEmployeeVarifyingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }


  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewPintForm onNewPintCreation={this.props.onNewPintCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onEmployeeVarifyingConfirmation={this.handleEmployeeVarifyingConfirmation}/>;
    }
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}
NewPintControl.propTypes = {
  onNewPintCreation: PropTypes.func
};
export default NewPintControl;
