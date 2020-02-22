import React from 'react';
import PropTypes from 'prop-types';

const newPintFormStyles = {
  fontFamily: 'sans-serif',
  position: 'absolute',
  textAlign: 'center',
  textShadow: "1px 1px gray",
  width: "35%",
  marginLeft: "30%",
  marginTop: "22%",
  zIndex: "+1",
  backgroundColor: "rgba(50,50,50,.7)",
  borderRadius: "25px",
};


function ConfirmationQuestions(props){
  return (
    <div style={newPintFormStyles}>
      <p>Are you an employee of this here Saloon?</p>
      <button onClick={props.onEmployeeVarifyingConfirmation}>Yes</button>
    </div>
  );
}
ConfirmationQuestions.propTypes = {
  onEmployeeVarifyingConfirmation: PropTypes.func
};
export default ConfirmationQuestions;
