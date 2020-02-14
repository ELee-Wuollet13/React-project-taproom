import React from "react";
import PintEmp from "./PintEmp";
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


var headerStyles = {
  fontFamily: 'sans-serif',
  position: 'absolute',
  textshadow: "3px 3px white",
  width: "100%",
  zIndex: "+1"
};

const pintListEmp = [
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
 },
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
 },
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
 },
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

function PintListEmp(){
  return (
    <div style={headerStyles}>
    {pintListEmp.map((pintEmp,index) =>
      <PintEmp
      name={pintEmp.name}
      brand={pintEmp.brand}
      cost={pintEmp.cost}
      alcoholContent={pintEmp.alcoholContent}
      remainingAmount={pintEmp.remainingAmount}
      key={index}/>
    )}
    </div>
  )};
  export default PintListEmp;
