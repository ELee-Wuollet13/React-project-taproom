import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

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

const inputFormStyles = {
  margin: "5px",
}

function NewPintForm(props){
  let _brand = null;
  let _name = null;
  let _cost = null;
  let _alcoholContent = null;
  let _remainingAmount = null;

  function handleNewPintFormSubmission(event) {
    event.preventDefault();
    props.onNewPintCreation({brand: _brand.value, name: _name.value, cost: _cost.value, alcoholContent: _alcoholContent.value, remainingAmount: _remainingAmount.value, id: v4, timeOpen: new Moment()});
    _brand.value = '';
    _name.value = '';
    _cost.value = '';
    _alcoholContent.value = '';
    _remainingAmount.value = '';
  }

  return (
    <div style={newPintFormStyles}>
    <form onSubmit={handleNewPintFormSubmission}>
      <input style={inputFormStyles}
      type='text'
      id='brand'
      placeholder='Brand'
      ref={(input) => {_brand = input;}}/>
      <input style={inputFormStyles}
      type='text'
      id='name'
      placeholder='Beer Names'
      ref={(input) => {_name = input;}}/>
      <input style={inputFormStyles}
      type='number'
      id='cost'
      placeholder='cost'
      ref={(input) => {_cost = input;}}/>
      <input
      type='number'
      id='alcoholContent'
      placeholder='alcoholContent'
      ref={(input) => {_alcoholContent = input;}}/>
      <input style={inputFormStyles}
      type='number'
      id='remainingAmount'
      placeholder='remainingAmount'
      ref={(input) => {_remainingAmount = input;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>

  );
}
NewPintForm.propTypes = {
  onNewPintCreation: PropTypes.func
};
export default NewPintForm;
