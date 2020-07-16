import { Button } from '@material-ui/core';
import React, { useState } from 'react';

const SideBar = (props) => {
    // state for opening and closing door //
    const [open, setOpen] = useState(false)
    // side of drawer: In case if we need to change side//
    const anchor = 'right'
    // method to togle drawer//
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab'  || event.key === 'Shift')) {
            return;
        }
        setOpen(true)
    }

    return(
        <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
        </React.Fragment>
    )
}

export default SideBar
