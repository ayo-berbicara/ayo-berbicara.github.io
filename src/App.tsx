import { Stack, Typography, 
  Card, CardActionArea, CardContent, 
  IconButton } from '@mui/material';
import { MicRounded } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';
import { useState } from 'react';
import './styles/App.css';

function App(){
  return (
    <Stack alignItems='center' justifyContent='center' sx={{height: '100%'}}>
      <Card sx={{
        width: '24rem', 
        maxWidth: 'calc(100% - 2rem)', 
        background: `${alpha('#ffffff', 0.2)}`,
      }}>
        <CardContent sx={{background: 'transparant', color: 'white', height: '6rem'}}>
          <Typography>Transkrip</Typography>
        </CardContent>
        <CardContent sx={{background: 'white', color: `${alpha('#000', 0.82)}`}}>
          <Stack direction='row' alignItems='center' justifyContent='center'>
            {/* <IconButton size='large' sx={{border: 1, borderColor: 'primary.main'}}> */}
            <IconButton size='large' color='primary' focusRipple={true} sx={{backgroundColor: 'primary.light'}}>
              <MicRounded sx={{fontSize: '2rem'}} />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
}

export default App;
