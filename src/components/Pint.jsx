import React from "react";
import Moment from 'moment';
import PropTypes from "prop-types";
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Pint(props){


  function displayTimeOpen(timeOpen) {
    console.log(props.timeOpen);
    console.log(timeOpen);
    return timeOpen.from(new Moment(), true);
  }

  return (
    <div>
    <h3>{props.brand} - {props.name} - {props.cost} - {props.alcoholContent} - {props.remainingAmount}      <Link to="/EditPint">Update Pint</Link></h3>
    </div>
  );
}

Pint.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  cost: PropTypes.number,
  alcoholContent: PropTypes.number,
  remainingAmount: PropTypes.number,
};
export default Pint;
