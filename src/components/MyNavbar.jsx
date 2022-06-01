import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './MyNavbar.css'
import { NavbarItems, ProcessItems, TppItems } from './navbarItems'


const MyNavbar = () => {

  const [navi, setNavi] = useState('')
  
  const handleChange = (e) => {
    setNavi(e.target.value)
    console.log(navi)
  }

  
  return (
    <NavLink 
      value={NavbarItems[0].id}
      to={NavbarItems[0].src}
      onClick={handleChange}
      >
      {NavbarItems[0].navbarName}
    </NavLink>
  )
}

export default MyNavbar

  // { NavbarItems.map(item => 
  //               <NavLink
  //                 key={item.id}
  //                 value={item.id}
  //                 onClick={handleChange}
  //                 to={item.src}
  //                 >
  //                   {item.navbarName}
  //               </NavLink>
  //             )}