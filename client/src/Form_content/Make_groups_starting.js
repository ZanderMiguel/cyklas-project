import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import { Select, MenuItem, Divider, Grid, Avatar, Typography, Button, Box, IconButton, TextField, InputLabel, InputAdornment, Tooltip, List, ListItemAvatar, ListItemText, Accordion, AccordionSummary, FormControl, Radio, RadioGroup, FormControlLabel, Input } from '@mui/material';
import GroupsIconButton from '../assets/ImageJaven/GroupsIconButton.png';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import GroupsIcon from '../assets/ImageJaven/GroupsIcon.png';
import useStyle from "./Styles/Make_groups_notstarted_style";
import { AddCircle, AddCircleOutline, ArrowCircleRightOutlined, Send, BorderColorOutlined, DeleteOutlined, JoinFull, MoreVert, SettingsBackupRestore } from "@mui/icons-material";
import Groups_addmember from "./Makegroups_model/Groups_components/Groups_addmember";
import Make_groups_recreate from "./Make_groups_recreate";
import CusPopover from '../components/Popover';
import MakeGroupsSettingspopover from '../components/PopoverContent/MakeGroupsSettingspopover';
import Groups_movemember from "./Makegroups_model/Groups_components/Groups_movemember";
import Groups_swapmember from "./Makegroups_model/Groups_components/Groups_swapmember";
import Make_groups_closing from "./Make_groups_closing";

const dataGroup = [
    {
      groupName: "Group 1",
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
      groupName: "Group 2",
      totalMembers: "2",
      groupMembers: [
          {
           avatar: <Avatar src = {AvatarIcon} sx = {{ height: "2em", width: "2em" }}/>,
           memberName: 'javen'
          }
              
         ]
    }
  ];

  const dataRoom = [
    {
      value: 'Everyone',
      label: 'Everyone',
    },
    {
      value: 'Group 1 only',
      label: 'Group 1 only',
    },
    {
      value: 'Group 2 only',
      label: 'Group 2 only',
    }
  ];

function Make_groups_starting({ open, close, maxWidth }) {
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

    const [selectRoom, setSelectRoom] = useState('');

    const handleChangeRoom = (event) => {
        setSelectRoom(event.target.value);
    };

    const [opendialogCloseGroups, setOpenDialogCloseGroups] = useState(false);

    const handleCreateCloseGroups = () => {
        setOpenDialogCloseGroups(true);
    };

    const handleCreateCloseCloseGroups = () => {
        setOpenDialogCloseGroups(false);
    };

  return (
    <div>
      <Dialogform open={open} close={close} maxWidth={maxWidth}
      btn={
          <>
            <Box sx = {{
                paddingLeft: "2em",
                width: "40em",
                height: "auto"
            }}>
                <FormControl
              variant="standard"
              sx={{
                width: 'auto',
                float: "right",
                marginBottom: "0.8em",
                paddingTop: '0em'
              }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{
                  fontSize: '0.9em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'Capitalize',
                }}
              >
                To:
              </InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectRoom}
                onChange={handleChangeRoom}
                label="SelectRoom"
                disableUnderline
                sx={{
                  width: '100%',
                  fontSize: '0.9em',
                  fontWeight: '600',
                  color: '#007FFF',
                  borderBottom: '1px solid #DBDBDB',
                  paddingRight: "1em"
                }}
              >
                {dataRoom.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {' '}
                    {label}{' '}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            
                <Box className="write-comment" sx={{
                    display: 'flex',
                    gap: '0.5em',
                    width: '100%',
                    height: 'auto'
            }}>
                <Avatar
                  alt="Remy Sharp"
                  src={AvatarIcon}
                  sx={{
                    marginTop: '2px',
                  }}
                />

                <TextField
                  id="filled-basic"
                  placeholder="Send a message to your class..."
                  variant="filled"
                  sx={{
                    width: '100%',
                  }}
                  inputProps={{
                    style: {
                      height: '0px',
                      fontSize: '0.8em',
                      paddingBottom: '20px',
                    },
                  }} // font size of input text
                  InputLabelProps={{
                    style: {
                      fontSize: '20px',
                      color: '#8E8E8E',
                      fontWeight: 'bold',
                      marginBottom: '5px',
                    },
                  }} // font size of input label
                  InputProps={{
                    disableUnderline: true, // pantanggal ng bottom outline
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="send"
                          sx={{
                            height: '35px',
                            width: '35px',
                            margin: '2px 0px',
                          }}>
                          <Send sx={{
                            color: '#3F3D56',
                            fontSize: '20px',
                          }} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
            
        <Box flexGrow = {1}/>

        <Button
        onClick = {handleCreateCloseGroups}
          variant="contained"
          sx={{
            marginTop: "5em",
            backgroundColor: '#F74747',
            color: 'white',
            fontSize: '0.8em',
            fontWeight: '600',
            textTransform: 'Capitalize',
            padding: '0.3em 3em',
            boxShadow: "none",
            '&: hover': {
              backgroundColor: '#ED3333',
            },
          }}
        >
          Close Groupings
        </Button>
        </>
      }>
          {opendialogCloseGroups && (
                <Make_groups_closing
                    open={opendialogCloseGroups}
                    close={handleCreateCloseCloseGroups}
                    maxWidth="md"
                    state={setOpenDialogCloseGroups}
                />
            )}
        <Grid container sx = {{ padding: "0em 2em" }}>
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
                        color: "#49B854",
                        fontSize: "0.8em",
                        fontWeight: "600",
                        textTransform: "Capitalize",
                        width: "relative",
                        height: "max-content",
                        paddingRight: "8em"
                    }}>
                        Starting
                    </Typography>
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
                                <Tooltip title="Join your students in their groupings" placement="top">
                                <Button variant = "contained" 
                                startIcon = {<ArrowCircleRightOutlined/>}
                                sx = {{
                                    backgroundColor: "#49B854",
                                    color: "white",
                                    fontSize: "0.8em",
                                    fontWeight: "600",
                                    textTransform: "Capitalize",
                                    padding: "0.3em 2em",
                                    width: "auto",
                                    boxShadow: "none",
                                    "&: hover": {
                                        backgroundColor: "#31B13E"
                                    }
                                }}>
                                    Join
                                </Button>
                                </Tooltip>
                            </Box>
                            </Box>
                        )
                        
                    })}
                </Grid>
                </Box>
            </Grid>
            
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Make_groups_starting;
