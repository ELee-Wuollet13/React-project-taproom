import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';


function Header(){

  return (
    <div className='header'>
    <style jsx>{`
      body {
        // background-color: #3A506B
      }

      .textBox {
        text-align: center;
        margin-top: -300px;
        z-index: 1;
        color: gray;
      }

      `}</style>
      <div>

      <div className='textBox'>

      <h1>Welcome to the Avengers home page</h1>
      </div>
      </div>
      </div>
    );
  };

  export default Header;
