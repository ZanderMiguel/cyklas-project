import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tooltip
} from '@mui/material';
import { Delete, Folder } from '@mui/icons-material';

import useGet from '../../../../customHooks/useGet';
import useStyle from "./Styles/People_table_layout_style";

const dataProf = [
  {
    memberName: "Mark Andrei",
    children: "M"
  }
];

const dataStud = [
  {
    memberName: "Tom Hiddleston",
    children: "T"
  },
  {
    memberName: "Tom Holland",
    children: "T"
  },
  {
    memberName: "Paul Rudd (You)",
    children: "P"
  },
  {
    memberName: "Sebastian Stan",
    children: "S"
  },
  {
    memberName: "Robert Downey Jr.",
    children: "R"
  }
];

function People_table_layout() {
  const {designs} = useStyle();

  return (
      <Container maxWidth = "md">
        <Grid container rowSpacing = {1}>
          <Grid item xs = {12}>
            <Box className = "Total" sx = {designs.Total_Style}>
              <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

              <Typography sx = {designs.TotalProf_Typography_Style}>
              1 Professor
              </Typography>
            </Box>
            
            <Box sx = {designs.Professor_Container_Style}>
            <Box className="container" sx = {designs.Professor_Container_Sub_Style}>
              <Typography sx = {designs.Professor_Typography_Style}>
                Professors
              </Typography>
            </Box>
            <Divider />

            <Grid item xs={12}>
                <List sx = {designs.List_Style}>
                  {dataProf.map(function(items, index) {
                    return (
                      <ListItem key = {index} sx = {designs.ListItem_Style}>
                        <ListItemAvatar>
                          <Avatar children = {items.children}/>
                        </ListItemAvatar>
                        
                        <ListItemText>
                          <Typography sx = {designs.Prof_Typography_Style}>
                          {items.memberName}
                          </Typography>
                        </ListItemText>

                        {/* <IconButton edge="end" aria-label="delete">
                          <Delete/>
                        </IconButton> */}
                      </ListItem>
                    )
                  })}
                </List>
            </Grid>
            </Box>
          </Grid>

          <Grid item xs = {12}>
            <Box className = "Total" sx = {designs.Total_Style}>
              <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

              <Typography sx = {designs.TotalStud_Typography_Style}>
              5 Classmates
              </Typography>
            </Box>

            <Box sx = {designs.Student_Container_Style}>
            <Box className="container" sx = {designs.Student_Container_Sub_Style}>
              <Typography sx = {designs.Students_Typography_Style}>
                Classmates
              </Typography>
            </Box>
            <Divider/>

            <Grid item xs={12}>
                <List sx = {designs.List_Style}>
                  {dataStud.map(function(items, index) {
                    return (
                      <>
                      <ListItem key = {index} sx = {designs.ListItem_Style}>
                        <ListItemAvatar>
                          <Avatar children = {items.children}/>
                        </ListItemAvatar>
                        
                        <ListItemText>
                          <Typography sx = {designs.Student_Typography_Style}>
                          {items.memberName}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <Divider/>
                      </>
                    )
                  })}
                </List>
            </Grid>
            </Box>
          </Grid>

        </Grid>
      </Container>
      
  
  );
}

export default People_table_layout;
