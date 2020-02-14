import React from 'react'
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

var align ={
  width: '100%;'
}

var navButton = {
  fontFamily: 'Fira Sans',
  fontSize: "30px",
  borderRadius: "50%",
  backgroundColor: "rgba(0,0,0,0)",
  margin: "3%",
  color: "#663300"
}

function Navbar() {
  return(
    <div style={align}>
    <Link to ='/pintList'><button style={navButton}>Customer</button></Link>
    <Link to ='/'><button style={navButton}>Home</button></Link>
    <Link to ='/pintListEmp'><button style={navButton}>Employee</button></Link></div>
  )
}

export default Navbar;
