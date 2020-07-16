import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import SideBar from './SideBar';

const Navbar = () => {
  return(
    <div className='navbar'>
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton edge='start' aria-label='brand-logo'>
            <i className='far fa-building'></i>
          </IconButton>
          <Typography variant='h5'>
            Zeems
          </Typography>
          <div className='nav-link'>
            <a href='#body'>Home</a>
          </div>
          <div className='nav-link'>
            <a href='#about'>About Us</a>
          </div>
          <div className='nav-link'>
            <a href='#service'>Service</a>
          </div>
          <div className='nav-link'>
            <a href='#contact'>Contact</a>
          </div>
          <SideBar/>
        </Toolbar>    
      </AppBar>
    </div>
  )
}

export default Navbar
