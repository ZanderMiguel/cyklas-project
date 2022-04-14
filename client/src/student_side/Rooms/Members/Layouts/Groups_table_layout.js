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
  ListItemButton,
  ListItemIcon,
  Collapse,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tooltip
} from '@mui/material';
import { Delete, Inbox, StarBorder, ExpandMore, ExpandLess } from '@mui/icons-material';
import GroupsIcon from "../../../../assets/ImageJaven/GroupsIcon.png";
import useGet from '../../../../customHooks/useGet';
import useStyle from "./Styles/Groups_table_layout_style";

const dataGroup = [
  {
    groupName: "Group1",
    groupMembers: [
       {avatarChildren: 'Z', memberName: 'zander'}, 
       {avatarChildren: 'L', memberName: 'letsgo'} 
      ]
  },
  {
    groupName: "Group2",
    groupMembers: [
        {avatarChildren: 'J', memberName: 'javen'}
       ]
  }
];

function Groups_table_layout() {
  const {designs} = useStyle();

  return (
      <Container maxWidth = "md">
        <Grid container rowSpacing = {1}>
          <Grid item xs = {12}>
            <Box className = "Total" sx = {designs.Total_Style}>
              <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

              <Typography sx = {designs.TotalGroups_Typography_Style}>
              2 Groups
              </Typography>
            </Box>
            
            <Box sx = {designs.Group_Container_Style}>
            <Box className="container" sx = {designs.Group_Container_Sub_Style}>
              <Typography sx = {designs.Groups_Typography_Style}>
                Groups
              </Typography>
            </Box>
            <Divider />

            <Grid item xs={12}>
                {dataGroup.map((items, index) => {
                    return (
                        <Accordion key = {index} sx = {designs.Accordion_Style}>
                        
                        <AccordionSummary sx = {designs.AccordionSummary_Style}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <img src = {GroupsIcon} style = {{ marginTop: "0.3em", height: "2em", width: "2em", marginRight: "1em" }}/>
                        
                        <Typography sx = {designs.GroupName_Typography_Style}> 
                        {items.groupName} 
                        </Typography>
                        </AccordionSummary>
                                {items.groupMembers.map((items2, index) => {
                                    return (
                                    <List key = {index} component="div" sx = {designs.List_Style}>
                                        <ListItemAvatar>
                                        <Avatar children = {items2.avatarChildren}/>
                                        </ListItemAvatar>
                                        
                                        <ListItemText>
                                        <Typography sx = {designs.Member_Typography_Style}>
                                        {items2.memberName}
                                        </Typography>
                                        </ListItemText>
                                    </List>
                                    )
                                })}
                        </Accordion>
                    )
                    
                })}
            </Grid>
            </Box>
            </Grid>
        </Grid>
      </Container>
      
  
  );
}

export default Groups_table_layout;
