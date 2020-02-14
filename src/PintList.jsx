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
    cost: "9:00am - 2:00pm",
    alcoholContent: "4A",
    remainingAmount: "124"

 },
 {
    name: "Monname",
    brand: "Pioneer Courthouse Square",
    cost: "10:00am - 2:00pm",
    alcoholContent: "7C",
    remainingAmount: "124"

 },
 {
    name: "Tuesname",
    brand: "Hillsboro",
    cost: "5:00pm - 8:30pm",
    alcoholContent: "1F",
    remainingAmount: "124"
 },
 {
    name: "Wednesname",
    brand: "Shemanski Park",
    cost: "10:00am - 2:00pm",
    alcoholContent: "3E",
    remainingAmount: "124"
 },
 {
    name: "Thursname",
    brand: "Northwest Portland",
    cost: "2:00pm - 6:00pm",
    alcoholContent: "6D",
    remainingAmount: "124"
 },
 {
    name: "Saturname",
    brand: "Beaverton",
    cost: "10:00am - 1:30pm",
    alcoholContent: "9G",
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
