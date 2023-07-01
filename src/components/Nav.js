import React, { useState } from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
const Nav = () => {
  const width = window.innerWidth
  const [toogle,setToogle] = useState(width>320 && width<480 ? false : true);

  return (
    <nav>
      <div className='logo'>BLOOD<span className='e'>E</span></div>
      {width>320 && width<480 ? <Icon id='toogle' icon="ri:menu-3-line" onClick={()=>{setToogle(!toogle)}}/> : null}
      {toogle ? <ul className='links'>
        <li><Link to='/' onClick={()=>{ width>320 && width<480 ? setToogle(false) : console.log("")}}>Home</Link></li>
        <li><Link to='/Register' onClick={()=>{width>320 && width<480 ? setToogle(false) : console.log("")}}>Register</Link></li>
      </ul> : null}
    </nav>
  )
}

export default Nav