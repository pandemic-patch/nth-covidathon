// This file just renders a minimalistic header which is different than Navbar - helping with branding as we are not using any shared header/navbar//
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

const Header = () => {
    return(
        <div className='navbar'>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h5' className='header-brand-logo'>
            Zeems
          </Typography>
        </Toolbar>
        </AppBar>
        </div>
    )
}

export default Header