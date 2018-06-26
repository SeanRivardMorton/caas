import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'


import Typography from '@material-ui/core/Typography'
const NavBarMenu = () => {
    return(
		<Paper>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Collection</MenuItem>
            <MenuItem>Log Out</MenuItem>
          </MenuList>
        </Paper>

    )
}
export default NavBarMenu;