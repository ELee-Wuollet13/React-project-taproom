import React from "react";
import Pint from "./Pint";


const headerStyles = {
  fontFamily: 'sans-serif',
  position: 'absolute',
  textAlign: 'center',
  textShadow: "1px 1px gray",
  width: "35%",
  marginLeft: "30%",
  zIndex: "+1",
  backgroundColor: "rgba(50,50,50,.7)",
  borderRadius: "25px",
};


function PintList(){
  return (
    <div style={headerStyles}>
    {pintList.map((pint, index) =>
      <Pint
      name={pint.name}
      brand={pint.brand}
      cost={pint.cost}
      alcoholContent={pint.alcoholContent}
      remainingAmount={pint.remainingAmount}
      key={index}/>
    )}
    </div>
  )};

  PintList.propTypes = {
  pintList: PropTypes.array
};
  export default PintList;
