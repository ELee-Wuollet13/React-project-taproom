import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions.jsx';
import NewKegForm from './NewKegForm.jsx';
import PropTypes from "prop-types";

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      this.setState({formVisibleOnPage: true});
    };

  render(){
    let currentlyVisibleContent = NewKegForm;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>;
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
NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
};
export default NewKegControl;
