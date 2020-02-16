import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';



function newKeg(){
  return (

    <div class="newKegStyles">
    <style jsx>{`
      .newKegStyles {
        color: 'white'
        fontFamily: 'sans-serif',
        position: 'absolute',
        textAlign: 'center',
        textShadow: "1px 1px gray",
        width: "35%",
        marginLeft: "30%",
        zIndex: "+1",
        backgroundColor: "rgba(50,50,50,.7)",
        borderRadius: "25px",
      }
      `}</style>
      <form>
      <label>
      New Keg:
      <input type="text" name="brand" />
      <input type="text" name="name" />
      <input type="text" name="price" />
      <input type="text" name="alcoholContent" />
      </label>
      <input type="submit" value="Submit" />
      </form>
      </div>

    );
  };

  export default newKeg;
