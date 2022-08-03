import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Badge, IconButton } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from '../../features/Cart/selectors';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const handleClickCart = () => {
      navigate('/cart');
    };
    const handleClickList = () => {
      navigate('/products');
    };
    const cartItemCount = useSelector(cartItemsCountSelector);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,cursor: 'pointer'}} onClick = {handleClickList}>
            Shop
          </Typography>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick = {handleClickCart}>
          <Badge badgeContent={cartItemCount} color="error">
            <ShoppingCart />
          </Badge>
        </IconButton>
        </Toolbar>
      </AppBar>


    </Box>
  );
}