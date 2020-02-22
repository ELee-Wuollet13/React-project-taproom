import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Saloon from './Saloon.jpg'

const navButton = {
  fontFamily: 'Fira Sans',
  fontSize: "30px",
  borderRadius: "12%",
  backgroundColor: "rgba(50,50,50,.7)",
  margin: "3%",
  color: "#663300",
  marginLeft: "25%"
}

const navbarStyles = {
  fontFamily: 'Fira Sans',
  fontSize: "30px",
  backgroundColor: "rgba(50,50,50,.7)",
  marginLeft: "-3%",
  marginRight: "-3%",
  color: "#663300",

}


function Header(){
  return (
    <div className='header'>
    <style jsx>{`

      .Saloon {
        z-index: -3;
        border-radius: 30px;
        width: 95%;
        margin-left: 2%;
        position: absolute;
      }
      `}</style>


      <img className='Saloon' src={Saloon}/>
      <div style={navbarStyles} className='textBox'>
      <Link to="/" style={navButton}>Home</Link> | <Link to="/NewPint" style={navButton}>Create Pint</Link>
      </div>
      </div>

    );
  };

  export default Header;
