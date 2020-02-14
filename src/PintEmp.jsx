import React from "react";
import PropTypes from "prop-types";

function Pint(props){
  return (
    <div>
    <h3>{props.brand} - {props.name} - {props.button} - {props.cost} - {props.alcoholContent}</h3>
    </div>
  );
}

Pint.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  addButton: PropTypes.button.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  remainingAmount: PropTypes.string.isRequired,
};


export default Pint;
