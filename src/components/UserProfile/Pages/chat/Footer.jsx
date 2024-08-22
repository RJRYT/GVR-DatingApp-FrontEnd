import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';


const Footer = () => {
  return (
    <footer>
     <Paper
      component="form"
      sx={{  marginLeft: " 20px" , display: 'flex', alignItems: 'center', width: "60vw" , maxWidth: 700 , minWidth: "100%"}}
    >
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
      <IconButton>
        <KeyboardVoiceIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1  }}
        placeholder="Type your message"
        inputProps={{ 'aria-label': 'Type your message' }}
      />
      <IconButton type="button" sx={{ p: '10px', right: 0 }} aria-label="send">
        <SendIcon />
      </IconButton>
      
    </Paper>
    
    </footer>
  );
};

export default Footer;
