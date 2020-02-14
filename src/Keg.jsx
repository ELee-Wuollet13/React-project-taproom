import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <div>
    <p><h2><em>{props.month}</em></h2></p>
    <h3>{props.selection.map((crop) =>
    <li>{crop}</li>
  )}</h3>
    </div>
  );
}

Keg.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,

};

export default Keg;
