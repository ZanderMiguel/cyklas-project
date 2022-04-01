import React from 'react';
import { List, ListItem, ListItemIcon, Divider, Box, Typography } from '@mui/material';
import { BorderColorOutlined, DeleteOutlineOutlined } from "@mui/icons-material";
import useStyle from "./Styles/PostOptionspopover_style";

function PostOptionspopover() {
  const {designs} = useStyle();

  return (
    <Box sx = {designs.Container_Style}>
      <List component="nav" sx = {designs.Nav_Style}>
        <ListItem button sx = {designs.ListItemButton_Style}>
          <Box sx = {designs.EditPostContainer_Style}>
            <BorderColorOutlined sx = {designs.BorderColorOutlined_Style}/>

            <Typography sx = {designs.EditPost_Typography_Style}>Edit Post</Typography>
          </Box>
        </ListItem>
        {/* <Divider/> */}
        <ListItem button sx = {designs.ListItemButton_Style}>
          <Box sx = {designs.DeletePostContainer_Style}>
            <DeleteOutlineOutlined sx = {designs.DeleteOutlineOutlined_Style}/>
            
            <Typography sx = {designs.DeletePost_Typography_Style}>Delete Post</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default PostOptionspopover;
