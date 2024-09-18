import React from 'react'
import './Header.css'
import { Badge } from '@mui/material'
export default function Header({lenght,show}) {
  return (
    <div className='header'>

 
      <Badge  badgeContent={lenght} color="primary">
      <i onClick={show} class="fa-solid fa-cart-shopping"></i>
      </Badge>

      
      <p  onClick={show} >Cart : {lenght}</p>
    </div>
  )
}
