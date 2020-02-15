import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Saloon from './Saloon.jpg'


function Header(){
  return (
    <div className='header'>
    <style jsx>{`

      .Saloon {
        z-index: -1;
        border-radius: 30px;
        width: 95%;
        margin-left: 2%;
        position: absolute;
      }
      `}</style>


      <img className='Saloon' src={Saloon}/>
      <div className='textBox'>
      </div>
      </div>

    );
  };

  export default Header;
