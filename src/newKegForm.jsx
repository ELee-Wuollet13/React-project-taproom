import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewKegForm(props){
  let _brand = null;
  let _name = null;
  let _cost = null;
  let _alcoholContent = null;
  let _remainingAmount = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
  props.onNewKegCreation({brand: _brand.value, name: _name.value, cost: _cost.value, alcoholContent: _alcoholContent.value, remainingAmount: _remainingAmount.value, id: v4, timeOpen: new Moment()});
    _name.value = '';
    _cost.value = '';
    _alcoholContent.value = '';
  }

  return (
    <div>
    <h1> NEWKEG</h1>
      <form style={{margin: "10px", position: "relative", zIndex: "550"}} onSubmit={handleNewKegFormSubmission}>
        <input
        type='text'
        id='brand'
        placeholder='Brand'
        ref={(input) => {_brand = input;}}/>
        <input
        type='text'
        id='name'
        placeholder='Beer Names'
        ref={(input) => {_name = input;}}/>
        <input
        type='number'
        id='cost'
        placeholder='cost'
        ref={(input) => {_cost = input;}}/>
        <input
        type='text'
        id='alcoholContent'
        placeholder='alcoholContent'
        ref={(input) => {_alcoholContent = input;}}/>
        <input
        type='text'
        id='remainingAmount'
        placeholder='remainingAmount'
        ref={(input) => {_remainingAmount = input;}}/>
        <button type='submit'>Add!</button>
      </form>
    </div>

  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};
export default NewKegForm;
