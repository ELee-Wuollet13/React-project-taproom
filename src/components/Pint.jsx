import React from "react";
import PropTypes from "prop-types";

function Pint(props){
  return (
    <div>
    <h3>{props.brand} - {props.name} - {props.cost} - {props.alcoholContent} - {props.remainingAmount}</h3>
    </div>
  );
}

Pint.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  cost: PropTypes.number,
  alcoholContent: PropTypes.string,
  remainingAmount: PropTypes.string,
};

export default Pint;
