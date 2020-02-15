import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';

const headerStyles = {
  fontFamily: 'sans-serif',
  position: 'absolute',
  textAlign: 'center',
  textShadow: "1px 1px gray",
  width: "25%",
  marginLeft: "35%",
  zIndex: "+1",
  backgroundColor: "rgba(50,50,50,.7)",
  borderRadius: "50%",
};


function Home(){
  return(
    <div style={headerStyles}>
    <div>
    <h1>Welcome To The Bar</h1>
    </div>
    </div>
  )
}
export default Home;
