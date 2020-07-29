import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import SideBar from './SideBar';

const Navbar = () => {
  // this array is created just to be simpler way to modify nav options/link in sidebar//
  const navOptions = ['Home', 'About Us', 'Service', 'Contact']

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
            <a href='#home'>Home</a>
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
          <div className='nav-link'>
            <a href='/login'>
              <Button>
                Login
              </Button>
            </a>
          </div>
          <SideBar navOptions={navOptions}/>
        </Toolbar>    
      </AppBar>
    </div>
  )
}

export default Navbar
