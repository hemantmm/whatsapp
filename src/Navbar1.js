import profile_logo from './profile_logo.jpg';
import Camera1_logo from './Camera1_logo.webp';
import React from 'react';
import { useHistory } from 'react-router';

const Navbar1 = () => {

  const history=useHistory();

  const handleChange=()=>
  {
    fetch('http://localhost:3000/',{
      method:'NEXT'
    }).then(()=>{
      history.push('/');
    })
  }

  const handleChange1=()=>
  {
    fetch('http://localhost:3000/status',{
      method:'NEXT'
    }).then(()=>{
      history.push('/status');
    })
  }

  const handleChange2=()=>
  {
    fetch('http://localhost:3000/calls',{
      method:'NEXT'
    }).then(()=>{
      history.push('/calls');
    })
  }



    return ( 
        <div className="logo1">
        <img src={Camera1_logo} alt="logo" />
        <div className="button">
        <button onClick={handleChange} className="nav">chat</button>
        <button onClick={handleChange1} className="nav">status</button>
        <button onClick={handleChange2} className="nav">calls</button>
        {/* <img src={profile_logo} alt="" className="user-image" onClick={handleChange3} /> */}

        </div>
      </div>
     );
}
 
export default Navbar1;