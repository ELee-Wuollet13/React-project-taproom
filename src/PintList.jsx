import React from "react";
import Pint from "./Pint";


var headerStyles = {
  fontFamily: 'sans-serif',
  position: 'absolute',
  color: "#663300",
  fontSize: "16px",
  textshadow: "3px 3px white",
  width: "100%",
  zIndex: "+1"


};

const pintList = [
 {
    name: "Sunname",
    brand: "Lents International",
    cost: "$4",
    alcoholContent: "7%",
    remainingAmount: "124"

 },
 {
    name: "Monname",
    brand: "Pioneer Courthouse Square",
    cost: "$7",
    alcoholContent: "7%",
    remainingAmount: "124"

 },
 {
    name: "Tuesname",
    brand: "Hillsboro",
    cost: "$3",
    alcoholContent: "4%",
    remainingAmount: "124"
 },
 {
    name: "Wednesname",
    brand: "Shemanski Park",
    cost: "$4",
    alcoholContent: "12%",
    remainingAmount: "124"
 },
 {
    name: "Thursname",
    brand: "Northwest Portland",
    cost: "$8",
    alcoholContent: "11%",
    remainingAmount: "124"
 },
 {
    name: "Saturname",
    brand: "Beaverton",
    cost: "$6",
    alcoholContent: "9%",
    remainingAmount: "124"
 }
];

function PintList(){
  return (
    <div style={headerStyles}>
    {pintList.map((pint,index) =>
      <Pint
      name={pint.name}
      brand={pint.brand}
      cost={pint.cost}
      alcoholContent={pint.alcoholContent}
      key={index}/>
    )}
    </div>
  )};
  export default PintList;
