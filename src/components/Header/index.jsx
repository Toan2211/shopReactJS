import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Badge, Button, IconButton, Menu, MenuItem, styled } from '@mui/material';
import { AccountCircle, ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from '../../features/Cart/selectors';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState } from 'react';
import Register from '../../features/Auth/components/Register';
import Login from '../../features/Auth/components/Login';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/Auth/userSlice';
const MODE = {
  LOGIN: 'login',
  REGISTER: 'register',
}
const DialogContentStyled = styled(DialogContent)(()=> ({
    minWidth: '450px'
}))
export default function Header() {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null);
    const isLoginedUser = useSelector(state => state.user.current)
    const isLogined = !!isLoginedUser.id

    const navigate = useNavigate();

    const handleClickCart = () => {
      navigate('/cart');
    };
    const handleClickList = () => {
      navigate('/products');
    };
    const cartItemCount = useSelector(cartItemsCountSelector);
    //dialog
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    //mode register or login
    const [mode, setMode] = useState(MODE.LOGIN)
    //menu
    const handleUserClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
      setAnchorEl(null);
    }
    const handleLogOutClick = () => {
      const action = logout()
      dispatch(action)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,cursor: 'pointer'}} onClick = {handleClickList}>
            Shop
          </Typography>
          {!isLogined && (
            <Button onClick = {handleClickOpen} color = "inherit">Login</Button>
          )
          }
          {
            isLogined && (
              <IconButton size="large" color="inherit" onClick = {handleUserClick}>
                <AccountCircle />
              </IconButton>
            )
          }
          <IconButton size="large" color="inherit" onClick = {handleClickCart}>
          <Badge badgeContent={cartItemCount} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogOutClick}>Logout</MenuItem>
      </Menu>
      <Dialog open={open} onClose={handleClose} min-width = "450px">
        <DialogContentStyled>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog = {handleClose}/>
              <Box textAlign="center">
                <Button color = "primary" onClick ={() => setMode(MODE.LOGIN)}>
                  Sign In
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog = {handleClose}/>
              <Box textAlign="center">
                <Button color = "primary" onClick ={() => setMode(MODE.REGISTER)}>
                  REGISTER HERE
                </Button>
              </Box>
            </>
          )}

        </DialogContentStyled>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}