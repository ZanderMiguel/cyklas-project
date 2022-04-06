import React, { useState } from 'react';
import { Divider, Grid, Typography, Button, List, Accordion, AccordionSummary, ListItemAvatar, ListItemText, Tooltip, IconButton, Box } from '@mui/material';
import { AddCircle, AddCircleOutline, BorderColorOutlined, DeleteOutlined } from "@mui/icons-material";
import GroupsIcon from '../../assets/ImageJaven/GroupsIcon.png';
import useStyle from "./Styles/Manual_style";
import Groups_addmember from "./Groups_components/Groups_addmember";

const dataGroup = [
  {
    groupName: "Untitled Group",
    totalMembers: "0",
    groupMembers: [
       {
        
       }, 
       {
        
       } 
      ]
  }
];

function Manual() {
const {designs} = useStyle();

const [opendialogAddMembers, setOpenDialogAddMembers] = useState(false);

  const handleCreateAddMembers = () => {
    setOpenDialogAddMembers(true);
  };

  const handleCreateCloseAddMembers = () => {
    setOpenDialogAddMembers(false);
  };

  return (
        <Box sx = {{ width: "relative", height: "23em" }}>
            <Grid item xs={12}>
                {dataGroup.map((items, index) => {
                    return (
                        <Box sx = {{ width: "relative", height: "auto", display: "flex" }}>
                            <Accordion key = {index} sx = {designs.Accordion_Style}>
                            
                            <AccordionSummary sx = {designs.AccordionSummary_Style}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <img src = {GroupsIcon} style = {{ marginTop: "0.3em", height: "2em", width: "2em", marginRight: "1em" }}/>
                            
                            <Typography sx = {designs.GroupName_Typography_Style}> 
                            {items.groupName} 
                            </Typography>

                            <Typography sx = {designs.TotalMembers_Typography_Style}> 
                            {items.totalMembers} 
                            </Typography>

                            </AccordionSummary>

                        <Divider sx = {{ margin: "0em 1.5em 0.5em 1.5em" }}/>
                        
                                {items.groupMembers.map((items2, index) => {
                                    return (
                                    <List key = {index} component="div" sx = {designs.List_Style}>
                                        <ListItemAvatar sx = {{ display: "flex", alignItems: "center" }}>
                                        {items2.avatar}
                                        </ListItemAvatar>
                                        
                                        <ListItemText>
                                        <Typography sx = {{ color: "#3F3D56", fontSize: "0.8em", fontWeight: "600", width: "100%", height: "relative", display: "flex", alignItems: "center" }}>
                                        {items2.memberName}
                                        </Typography>
                                        </ListItemText>
                                    </List>
                                    )
                                })}
                        </Accordion>

                        <Box sx = {{ width: "10em", height: "max-content", padding: "1.2em 0em", display: "flex", gap: "2em", alignItems: "center", justifyContent: "center" }}>
                            <Tooltip title="Rename Group" placement="top">
                            <IconButton edge="end" aria-label="edit" sx = {{ width: "0.8em", height: "0.8em", "&: hover": { backgroundColor: "transparent", color: "#007FFF" } }}>
                            <BorderColorOutlined sx = {{ fontSize: "0.9em" }}/>
                            </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete Group" placement="top">
                            <IconButton edge="end" aria-label="delete" sx = {{ width: "0.8em", height: "0.8em", "&: hover": { backgroundColor: "transparent", color: "#FF3B00" } }}>
                            <DeleteOutlined/>
                            </IconButton>
                            </Tooltip>

                            <Tooltip title="Add members in this group" placement="top">
                            <IconButton onClick = {handleCreateAddMembers} edge="end" aria-label="add" sx = {{ width: "0.9em", height: "0.9em", "&: hover": { backgroundColor: "#31B13E", color: "white" } }}>
                            <AddCircleOutline sx = {{ fontSize: "0.9em" }}/>
                            </IconButton>
                            </Tooltip>
                            {opendialogAddMembers && (
                                <Groups_addmember
                                    open={opendialogAddMembers}
                                    close={handleCreateCloseAddMembers}
                                    maxWidth="md"
                                    state={setOpenDialogAddMembers}
                                />
                            )}
                        </Box>
                        </Box>
                    )
                    
                })}

                <Button variant = "contained" startIcon = {<AddCircle sx = {{ color: "#615F79" }}/>}
                sx = {{
                    marginTop: "2em",
                    width: "100%",
                    justifyContent: "flex-start",
                    height: "auto",
                    backgroundColor: "#FAF8F9",
                    boxShadow: "none",
                    color: "#3F3D56",
                    fontSize: "0.7em",
                    fontWeight: "600",
                    textTransform: "Capitalize",
                    "&: hover": {
                        backgroundColor: "#FAF8F9",
                        boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"
                    }
                }}>
                    Add another group
                </Button>
            </Grid>
        </Box>
  );
}

export default Manual;
