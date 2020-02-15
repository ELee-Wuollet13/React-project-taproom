import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import Saloon from './Saloon.jpg'


function newKeg(){
  return (
    <div className='header'>
    <img className='Saloon' src={Saloon}/>
    <div className='textBox'>
    </div>
    </div>

  );
};

export default newKeg;
