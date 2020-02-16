import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


  function Home(){
    return(
      <div class="headerStyles">
      <style jsx>{`
        .headerStyles {
          fontFamily: 'sans-serif',
          position: 'absolute',
          textAlign: 'center',
          textShadow: "1px 1px gray",
          width: "25%",
          marginLeft: "35%",
          zIndex: "+1",
          backgroundColor: "rgba(50,50,50,.7)",
          borderRadius: "50%",
        }
        `}</style>

        <h1>Welcome To The Bar</h1>
        </div>

      )
    }
    export default Home;
