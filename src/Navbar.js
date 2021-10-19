import React from 'react';
import logo from './logo.png';
import threedots from './threedots.png';

const Navbar = () => {
    return ( 
        <div className="navbar">
      <div className="navbar1">
      <h2 className="heading">WhatsApp</h2>
      <div className="image">
        <img src={logo} alt="logo" />
        <img src={threedots} alt="logo" />
      </div>
      </div>
      </div>
     );
}
 
export default Navbar;