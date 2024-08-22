import { Avatar, Box, Chip, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import sender from "../../../../assets/story/profile1.png"
import receiver from "../../../../assets/story/profile2.png"

const ChatArea = () => {
  return (
    <Paper sx={{ overflowY: "auto", flex: "1 0 0", background: "#eee" }}>
      <Stack direction="row" justifyContent={"center"} sx={{ py: 2, position: "sticky", top: "5px", zIndex: 1 }}>
        <Chip label="Today" />
      </Stack>
      
      <List sx={{ p: 1, overflowY: "auto", flex: "1 0 0" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar src={sender} />
          </ListItemAvatar>
          <Paper sx={{ maxWidth: "75%", p: 1,  paddingLeft: 3 ,borderRadius: "50px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <ListItemText 
                primary="Fathima"
                secondary={<Typography variant="caption">Good Night</Typography>}
              />
              <Typography variant="caption" sx={{ marginLeft: 10 }}>12:20 PM</Typography>
            </Box>
          </Paper>
        </ListItem>

        <ListItem alignItems="flex-start" sx={{ flexDirection: "row-reverse" }}>
          <Box sx={{ display: "flex", width: "100%", flexDirection: "row-reverse" }}>
            <ListItemAvatar sx={{ display: "flex", flexDirection: "row-reverse" }}>
              <Avatar src={receiver} />
            </ListItemAvatar>
            <Paper sx={{ maxWidth: "75%", p:1, paddingLeft: 3 ,   borderRadius: "50px" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <ListItemText 
                  primary="Nezrin"
                  secondary={<Typography variant="caption">See you tomorrow</Typography>}
                />
                <Typography variant="caption" sx={{ marginLeft: 10 }}>12:30 PM</Typography>
              </Box>
            </Paper>
          </Box>
        </ListItem>
      </List>
    </Paper>
  )
}

export default ChatArea;
