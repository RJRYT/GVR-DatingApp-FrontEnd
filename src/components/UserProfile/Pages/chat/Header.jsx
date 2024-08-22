import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CallIcon from '@mui/icons-material/Call';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography } from '@mui/material';
import sender from "../../../../assets/story/profile1.png"


const Header = () => {
  return (
       
          <Card sx={{ background: "rgb(121,3,121)" , borderRadius: 0 , color: "white" }}>
      <CardHeader
  
        avatar={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1  }}>
          <ArrowBackIcon  sx={{ marginRight: 2}}/>
          <Avatar sx={{ width: 56, height: 56 , fontSize: 30}} src={sender}></Avatar> 
          </Box>
        }
        action={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 , paddingTop: 1 , marginRight: 1}}>
          <IconButton sx={{ color: "primary.contrastText"}}>
            <CallIcon/>
          </IconButton>
          <IconButton sx={{ color: "primary.contrastText"}}>
            <VideocamIcon/>
          </IconButton>
          </Box>
        }
        
        title={<Typography sx={{ fontSize: "24px" , marginLeft: 2 }}>Fathima</Typography>}
        // subheader={<Typography variant='caption' sx={{ fontSize: "12px" , marginLeft: 2 }}>Full Stack Developer</Typography>}
        
      />
      </Card>
      

  )
}

export default Header