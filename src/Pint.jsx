import React from "react";
import PropTypes from "prop-types";

function Pint(props){
  return (
    <div>
    <p><h2><em>{props.location}</em></h2></p>
    <h3>{props.day} - {props.hours}</h3>
    <h3>{props.booth}</h3>
    </div>
  );
}

Pint.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string
};

export default Pint;
