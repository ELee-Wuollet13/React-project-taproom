import React from "react";
import Pint from "./Pint";
import PropTypes from 'prop-types';

const mainStyles = {
  fontFamily: 'sans-serif',
  position: 'absolute',
  textAlign: 'center',
  textShadow: "1px 1px gray",
  width: "35%",
  marginLeft: "30%",
  zIndex: "+10",
  backgroundColor: "rgba(50,50,50,.7)",
  borderRadius: "25px",
};

function PintList(props){

  console.log(props.pintList);
  return (
     <div style={mainStyles}>
    {props.pintList.map((pint) =>
      <Pint
        brand={pint.brand}
        name={pint.name}
        cost={pint.cost}
        alcoholContent={pint.alcoholContent}
        remainingAmount={pint.remainingAmount}
        formattedWaitTime={pint.formattedWaitTime}
        key={pint.id}/>
    )}
    </div>
  );
}
PintList.propTypes = {
  pintList: PropTypes.array
};

export default PintList;
