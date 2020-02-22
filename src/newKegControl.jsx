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
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }


  render(){
    let currentlyVisibleContent = NewPintForm;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewPintForm onNewPintCreation={this.props.onNewPintCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>;
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
