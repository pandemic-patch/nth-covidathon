import { Button, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import React, { useState } from 'react';

const SideBar = ({navOptions}) => {
    
    // state for opening and closing door //
    const [open, setOpen] = useState(false)
    // side of drawer: In case if we need to change side//
    const anchor = 'right'

    // method to togle drawer//
    const toggleDrawer = (anchor, open) => (event) => {
        setOpen(open)
    }

    // methods to render nav links/options//
    const drawer = (anchor) => (
        <div 
            className='sidebar-drawer'
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {navOptions.map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return(
        <React.Fragment key={anchor}>
            {/* button to trigger drawer */}
            <Button onClick={toggleDrawer(anchor, true)}>
                <i className='fas fa-bars' />
            </Button>
            {/* Actual Drawer */}
            <Drawer 
                anchor={anchor} 
                open={open}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
            >
                {drawer(anchor)}
            </Drawer>
        </React.Fragment>
    )
}

export default SideBar
