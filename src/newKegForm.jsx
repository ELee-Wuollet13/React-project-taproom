import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

const newKegFormStyles = {
  fontFamily: 'sans-serif',
  position: 'absolute',
  textAlign: 'center',

  zIndex: "+0",

};

function NewKegForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
  props.onNewKegCreation({names: _names.value, location: _location.value, issue: _issue.value, id: v4, timeOpen: new Moment()});
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <form style={newKegFormStyles} onSubmit={handleNewKegFormSubmission}>
        <input
        type='text'
        id='names'
        placeholder='Pair Names'
        ref={(input) => {_names = input;}}/>
        <input
        type='text'
        id='location'
        placeholder='Location'
        ref={(input) => {_location = input;}}/>
        <textarea
        id='issue'
        placeholder='Describe your issue.'
        ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>

      </form>
    </div>

  );
}
NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};
export default NewKegForm;
