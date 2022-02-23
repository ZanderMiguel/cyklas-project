import React from 'react'
import { Divider, List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Typography, Button, Avatar, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
function Layout({ element1, index }) {
    const { image, firstName, lastName, userType } = element1

    return (
        
            <List>
                <ListItem style={{ justifyContent: "space-between" }}>

                    <ListItemAvatar>
                        <Avatar src={image.toString()} style={{ justifySelf: "flex-start" }} />
                    </ListItemAvatar>
                    <ListItemText primary={`${firstName} ${lastName}`} />

                   
                        <IconButton style={{ justifyContent: "flex-end"}}>
                            <DeleteIcon />
                        </IconButton>
                    

                </ListItem>
            </List>



      
    )
}

export default Layout