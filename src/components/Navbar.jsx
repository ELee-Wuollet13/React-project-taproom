import React from 'react'
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

const navButton = {
  fontFamily: 'Fira Sans',
  fontSize: "30px",
  borderRadius: "12%",
  backgroundColor: "rgba(50,50,50,.7)",
  margin: "3%",
  color: "#663300",
  marginLeft: "10%"
}

const navbarStyles = {
  fontFamily: 'Fira Sans',
  fontSize: "30px",
  backgroundColor: "rgba(50,50,50,.7)",
  margin: "3%",
  color: "#663300",

}
function Navbar() {
  return(
    <div style={navbarStyles} className='textBox'>
    <Link to="/" style={navButton}>Home</Link> | <Link to="/NewPint" style={navButton}>Create Pint</Link>
    </div>
  )
}

export default Navbar;
