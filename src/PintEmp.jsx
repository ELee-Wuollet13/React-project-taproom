import React from "react";
import PropTypes from "prop-types";

function PintEmp(props){
  return (
    <div>
    <h3>{props.brand} - {props.name} - {props.button} - {props.cost} - {props.alcoholContent} - {props.remainingAmount}</h3>
    </div>
  );
}

PintEmp.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  remainingAmount: PropTypes.string,
};


export default PintEmp;
