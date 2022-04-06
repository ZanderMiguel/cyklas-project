import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import { Divider, Grid, Avatar, Typography, Button, Box, IconButton, Tooltip, List, ListItemAvatar, ListItemText, Accordion, AccordionSummary, FormControl, Radio, RadioGroup, FormControlLabel, Input } from '@mui/material';
import GroupsIconButton from '../assets/ImageJaven/GroupsIconButton.png';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import GroupsIcon from '../assets/ImageJaven/GroupsIcon.png';
import useStyle from "./Styles/Make_groups_notstarted_style";
import { AddCircle, AddCircleOutline, BorderColorOutlined, DeleteOutlined, MoreVert, SettingsBackupRestore, DoneAll } from "@mui/icons-material";
import Groups_addmember from "./Makegroups_model/Groups_components/Groups_addmember";
import Make_groups_recreate from "./Make_groups_recreate";
import CusPopover from '../components/Popover';
import MakeGroupsSettingspopover from '../components/PopoverContent/MakeGroupsSettingspopover';
import Groups_movemember from "./Makegroups_model/Groups_components/Groups_movemember";
import Groups_swapmember from "./Makegroups_model/Groups_components/Groups_swapmember";

const dataGroup = [
    {
      groupName: "Group Yorme",
      totalMembers: "3",
      groupMembers: [
         {
          avatar: <Avatar src = {AvatarIcon} sx = {{ height: "2em", width: "2em" }}/>,
          memberName: 'zander'
         }, 
         {
          avatar: <Avatar src = {AvatarIcon} sx = {{ height: "2em", width: "2em" }}/>,
          memberName: 'letsgo'
         } 
        ]
    },
    {
      groupName: "Group Pacman",
      totalMembers: "2",
      groupMembers: [
          {
           avatar: <Avatar src = {AvatarIcon} sx = {{ height: "2em", width: "2em" }}/>,
           memberName: 'javen'
          }
              
         ]
    }
  ];

function Make_groups_recreated({ open, close, maxWidth }) {
    const {designs} = useStyle();

    const [opendialogAddMembers, setOpenDialogAddMembers] = useState(false);

    const handleCreateAddMembers = () => {
        setOpenDialogAddMembers(true);
    };

    const handleCreateCloseAddMembers = () => {
        setOpenDialogAddMembers(false);
    };

    const [opendialogRecreateGroups, setOpenDialogRecreateGroups] = useState(false);

    const handleCreateRecreateGroups = () => {
        setOpenDialogRecreateGroups(true);
    };

    const handleCreateCloseRecreateGroups = () => {
        setOpenDialogRecreateGroups(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClickSettings = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleCloseSettings = () => {
      setAnchorEl(null);
    };
    const account = Boolean(anchorEl);

    const [opendialogMoveMember, setOpenDialogMoveMember] = useState(false);

    const handleCreateMoveMember = () => {
        setOpenDialogMoveMember(true);
    };

    const handleCreateCloseMoveMember = () => {
        setOpenDialogMoveMember(false);
    };

    const [opendialogSwapMember, setOpenDialogSwapMember] = useState(false);

    const handleCreateSwapMember = () => {
        setOpenDialogSwapMember(true);
    };

    const handleCreateCloseSwapMember = () => {
        setOpenDialogSwapMember(false);
    };

  return (
    <div>
      <Dialogform open={open} close={close} maxWidth={maxWidth}
      btn={
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#49B854',
            color: 'white',
            fontSize: '0.8em',
            fontWeight: '600',
            textTransform: 'Capitalize',
            padding: '0.3em 3em',
            '&: hover': {
              backgroundColor: '#31B13E',
            },
          }}
        >
          Start Groupings
        </Button>
      }>
        <Grid container sx = {{ padding: "0em 2em" }}>
        <Box sx = {{
                display: "flex",
                gap: "0.5em",
                width: "relative",
                height: "auto",
                margin: "0.8em 0em",
                alignItems: "center"
            }}>
                <DoneAll sx = {{ color: "#49B854", fontSize: "1.3em" }}/>

                <Typography sx = {{
                            width: "100%",
                            height: "auto",
                            color: "#49B854",
                            fontSize: "0.8em",
                            fontWeight: "500"
                        }}>
                            Groups are successfully recreated!
                </Typography>
            </Box>

            <Grid item xs = {12}>
                <Box sx = {{ width: "relative", height: "auto", display: "flex" }}>
                <Box sx = {{
                    width: "relative",
                    flexGrow: 1,
                    height: "auto"
                }}>
                    <Typography sx = {{
                        color: "#3F3D56",
                        fontSize: "1.3em",
                        fontWeight: "600",
                        textTransform: "Uppercase",
                        width: "relative",
                        height: "max-content",
                        paddingRight: "8em"
                    }}>
                        make groups!
                    </Typography>

                    <Typography sx = {{
                        color: "#007FFF",
                        fontSize: "0.8em",
                        fontWeight: "600",
                        textTransform: "Capitalize",
                        width: "relative",
                        height: "max-content",
                        paddingRight: "8em"
                    }}>
                        Not started
                    </Typography>
                </Box>

                <Box sx = {{ width: "auto", height: "relative", padding: "0.5em 0em", display: "flex", gap: "0.8em" }}>
                    <Button 
                    onClick = {handleCreateRecreateGroups}
                    variant = "contained" 
                    startIcon = {<SettingsBackupRestore/>}
                    sx = {{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        color: "#007FFF",
                        padding: "0em 1.5em",
                        fontSize: "0.8em",
                        fontWeight: "600",
                        textTransform: "Capitalize",
                        "&: hover": {
                            boxShadow: "none",
                            backgroundColor: "#007FFF",
                            color: "white"
                        }
                    }}>
                        Recreate Groupings
                    </Button>

                    {opendialogRecreateGroups && (
                        <Make_groups_recreate
                            open={opendialogRecreateGroups}
                            close={handleCreateCloseRecreateGroups}
                            maxWidth="md"
                            state={setOpenDialogRecreateGroups}
                        />
                    )}

                    <Button 
                    onClick = {handleClickSettings}
                    variant = "contained" 
                    startIcon = {<MoreVert/>}
                    sx = {{
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        color: "#007FFF",
                        padding: "0em 1.5em",
                        fontSize: "0.8em",
                        fontWeight: "600",
                        textTransform: "Capitalize",
                        "&: hover": {
                            backgroundColor: "#FCFCFC",
                            boxShadow: "none"
                        }
                    }}>
                        Settings
                    </Button>
                    <CusPopover
                    PaperProps={{ elevation: 0 }}
                    open={account}
                    anchorEl={anchorEl}
                    onClose={handleCloseSettings}>
                    <MakeGroupsSettingspopover />
                    </CusPopover>
                </Box>
                </Box>
            </Grid>

            <Grid item xs = {12} sx = {{ marginTop: "2em" }}>
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
                                            <Typography sx = {{ color: "#3F3D56", fontSize: "0.8em", fontWeight: "600", width: "30em", height: "relative", display: "flex", alignItems: "center" }}>
                                            {items2.memberName}
                                            </Typography>
                                            </ListItemText>

                                            <ListItemText>
                                            <Button 
                                            onClick = {handleCreateMoveMember}
                                            variant = "contained" sx = {{
                                                backgroundColor: "transparent", boxShadow: "none", color: "#3F3D56", textTransform: "Capitalize", fontSize: "0.8em", fontWeight: "500", width: "100%", height: "max-content", padding: "0em", "&: hover": { backgroundColor: "transparent", boxShadow: "none" }
                                            }}>
                                                Move
                                            </Button>
                                            {opendialogMoveMember && (
                                                <Groups_movemember
                                                    open={opendialogMoveMember}
                                                    close={handleCreateCloseMoveMember}
                                                    maxWidth="md"
                                                    state={setOpenDialogMoveMember}
                                                />
                                            )}
                                            </ListItemText>

                                            <ListItemText>
                                            <Button 
                                            onClick = {handleCreateSwapMember}
                                            variant = "contained" sx = {{
                                                backgroundColor: "transparent", boxShadow: "none", color: "#3F3D56", textTransform: "Capitalize", fontSize: "0.8em", fontWeight: "500", width: "100%", height: "max-content", padding: "0em", "&: hover": { backgroundColor: "transparent", boxShadow: "none" }
                                            }}>
                                                Swap
                                            </Button>
                                            {opendialogSwapMember && (
                                                <Groups_swapmember
                                                    open={opendialogSwapMember}
                                                    close={handleCreateCloseSwapMember}
                                                    maxWidth="md"
                                                    state={setOpenDialogSwapMember}
                                                />
                                            )}
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
            </Grid>
            
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Make_groups_recreated;
