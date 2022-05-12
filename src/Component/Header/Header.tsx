import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

export default function Header() {
   const history = useNavigate()
   return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography onClick={() => history('/')} style={{cursor: 'pointer'}}  variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Convertor
          </Typography>
          <Typography onClick={() => history('/exchange')} style={{cursor: 'pointer'}} variant="h6" component="div" sx={{ flexGrow: 0 }}>
            ExchangeRates
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
   )
}
