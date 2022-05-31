import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import {
  Divider,
  Grid,
  Avatar,
  Typography,
  Button,
  Box,
  IconButton,
  Tooltip,
  List,
  ListItemAvatar,
  ListItemText,
  Accordion,
  AccordionSummary,
} from '@mui/material';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import GroupsIcon from '../assets/ImageJaven/GroupsIcon.png';
import useStyle from './Styles/Make_groups_notstarted_style';
import {
  AddCircle,
  AddCircleOutline,
  BorderColorOutlined,
  DeleteOutlined,
  MoreVert,
  SettingsBackupRestore,
} from '@mui/icons-material';
import GROUPS_ADDMEMBER from './Makegroups_model/Groups_components/Groups_addmember';
import MAKE_GROUPS_RECREATE from './Make_groups_recreate';
import MAKE_GROUPS_STARTING from './Make_groups_starting';
import CusPopover from '../components/Popover';
import MakeGroupsSettingspopover from '../components/PopoverContent/MakeGroupsSettingspopover';
import GROUP_MOVEMEMBER from './Makegroups_model/Groups_components/Groups_movemember';
import GROUPS_SWAPMEMBER from './Makegroups_model/Groups_components/Groups_swapmember';
import { Redirect } from 'react-router-dom';
function Make_groups_notstarted({
  open,
  close,
  maxWidth,
  groups,
  socket,
  teleRoom,
}) {
  const { designs } = useStyle();

  const [opendialogAddMembers, setOpenDialogAddMembers] = useState(false);

  const handleCreateAddMembers = () => {
    setOpenDialogAddMembers(true);
  };

  const handleCreateCloseAddMembers = () => {
    setOpenDialogAddMembers(false);
  };

  const [opendialogRecreateGroups, setOpenDialogRecreateGroups] =
    useState(false);

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

  const [opendialogGroupsStarting, setOpenDialogGroupsStarting] =
    useState(false);

  const handleCreateGroupsStarting = () => {
    socket.emit('groupInit', teleRoom, groups.current);
    setOpenDialogGroupsStarting(true);
  };

  const handleCreateCloseGroupsStarting = () => {
    setOpenDialogGroupsStarting(false);
  };

  return (
    <div>
      <Dialogform
        open={open}
        close={() => {
          groups.current = [];
          close();
        }}
        maxWidth={maxWidth}
        btn={
          <Button
            onClick={handleCreateGroupsStarting}
            variant="contained"
            sx={{
              backgroundColor: '#49B854',
              color: 'white',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              padding: '0.3em 3em',
              boxShadow: 'none',
              '&: hover': {
                backgroundColor: '#31B13E',
              },
            }}
          >
            Start Groupings
          </Button>
        }
      >
        {opendialogGroupsStarting && (
          <MAKE_GROUPS_STARTING
            open={opendialogGroupsStarting}
            close={handleCreateCloseGroupsStarting}
            maxWidth="md"
            state={setOpenDialogGroupsStarting}
          />
        )}
        <Grid container sx={{ padding: '0em 2em' }}>
          <Grid item xs={12}>
            <Box sx={{ width: 'relative', height: 'auto', display: 'flex' }}>
              <Box
                sx={{
                  width: 'relative',
                  flexGrow: 1,
                  height: 'auto',
                }}
              >
                <Typography
                  sx={{
                    color: '#3F3D56',
                    fontSize: '1.3em',
                    fontWeight: '600',
                    textTransform: 'Uppercase',
                    width: 'relative',
                    height: 'max-content',
                    paddingRight: '8em',
                  }}
                >
                  make groups!
                </Typography>

                <Typography
                  sx={{
                    color: '#007FFF',
                    fontSize: '0.8em',
                    fontWeight: '600',
                    textTransform: 'Capitalize',
                    width: 'relative',
                    height: 'max-content',
                    paddingRight: '8em',
                  }}
                >
                  Not started
                </Typography>
              </Box>

              <Box
                sx={{
                  width: 'auto',
                  height: 'relative',
                  padding: '0.5em 0em',
                  display: 'flex',
                  gap: '0.8em',
                }}
              >
                <Button
                  onClick={handleCreateRecreateGroups}
                  variant="contained"
                  startIcon={<SettingsBackupRestore />}
                  sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    color: '#007FFF',
                    padding: '0em 1.5em',
                    fontSize: '0.8em',
                    fontWeight: '600',
                    textTransform: 'Capitalize',
                    boxShadow: 'none',
                    '&: hover': {
                      boxShadow: 'none',
                      backgroundColor: '#007FFF',
                      color: 'white',
                    },
                  }}
                >
                  Recreate Groupings
                </Button>

                {opendialogRecreateGroups && (
                  <MAKE_GROUPS_RECREATE
                    open={opendialogRecreateGroups}
                    close={handleCreateCloseRecreateGroups}
                    maxWidth="md"
                    state={setOpenDialogRecreateGroups}
                  />
                )}

                <Button
                  onClick={handleClickSettings}
                  variant="contained"
                  startIcon={<MoreVert />}
                  sx={{
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    color: '#007FFF',
                    padding: '0em 1.5em',
                    fontSize: '0.8em',
                    fontWeight: '600',
                    textTransform: 'Capitalize',
                    boxShadow: 'none',
                    '&: hover': {
                      backgroundColor: '#FCFCFC',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Settings
                </Button>
                <CusPopover
                  PaperProps={{ elevation: 0 }}
                  open={account}
                  anchorEl={anchorEl}
                  onClose={handleCloseSettings}
                >
                  <MakeGroupsSettingspopover />
                </CusPopover>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sx={{ marginTop: '2em' }}>
            <Box sx={{ width: 'relative', height: '23em' }}>
              <Grid item xs={12}>
                {groups.current &&
                  groups.current.map((items, index) => {
                    return (
                      <Box
                        key={index}
                        sx={{
                          width: 'relative',
                          height: 'auto',
                          display: 'flex',
                        }}
                      >
                        <Accordion key={index} sx={designs.Accordion_Style}>
                          <AccordionSummary
                            sx={designs.AccordionSummary_Style}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <img
                              src={GroupsIcon}
                              alt=""
                              style={{
                                marginTop: '0.3em',
                                height: '2em',
                                width: '2em',
                                marginRight: '1em',
                              }}
                            />

                            <Typography sx={designs.GroupName_Typography_Style}>
                              Group {index + 1}
                            </Typography>

                            <Typography
                              sx={designs.TotalMembers_Typography_Style}
                            >
                              {items.totalMembers}
                            </Typography>
                          </AccordionSummary>

                          <Divider sx={{ margin: '0em 1.5em 0.5em 1.5em' }} />

                          {items &&
                            items.map((items2, index) => {
                              return (
                                <List
                                  key={index}
                                  component="div"
                                  sx={designs.List_Style}
                                >
                                  <ListItemAvatar
                                    sx={{
                                      display: 'flex',
                                      alignItems: 'center',
                                    }}
                                  >
                                    <Avatar
                                      src={items2.camera}
                                      alt={items2.memberName[0].toUpperCase()}
                                    />
                                  </ListItemAvatar>

                                  <ListItemText>
                                    <Typography
                                      sx={{
                                        color: '#3F3D56',
                                        fontSize: '0.8em',
                                        fontWeight: '600',
                                        width: '30em',
                                        height: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                      }}
                                    >
                                      {items2.memberName}
                                    </Typography>
                                  </ListItemText>

                                  <ListItemText>
                                    <Button
                                      onClick={handleCreateMoveMember}
                                      variant="contained"
                                      sx={{
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        color: '#3F3D56',
                                        textTransform: 'Capitalize',
                                        fontSize: '0.8em',
                                        fontWeight: '500',
                                        width: '100%',
                                        height: 'max-content',
                                        padding: '0em',
                                        boxShadow: 'none',
                                        '&: hover': {
                                          backgroundColor: 'transparent',
                                        },
                                      }}
                                    >
                                      Move
                                    </Button>
                                    {opendialogMoveMember && (
                                      <GROUP_MOVEMEMBER
                                        open={opendialogMoveMember}
                                        close={handleCreateCloseMoveMember}
                                        maxWidth="md"
                                        state={setOpenDialogMoveMember}
                                      />
                                    )}
                                  </ListItemText>

                                  <ListItemText>
                                    <Button
                                      onClick={handleCreateSwapMember}
                                      variant="contained"
                                      sx={{
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none',
                                        color: '#3F3D56',
                                        textTransform: 'Capitalize',
                                        fontSize: '0.8em',
                                        fontWeight: '500',
                                        width: '100%',
                                        height: 'max-content',
                                        padding: '0em',
                                        boxShadow: 'none',
                                        '&: hover': {
                                          backgroundColor: 'transparent',
                                        },
                                      }}
                                    >
                                      Swap
                                    </Button>
                                    {opendialogSwapMember && (
                                      <GROUPS_SWAPMEMBER
                                        open={opendialogSwapMember}
                                        close={handleCreateCloseSwapMember}
                                        maxWidth="md"
                                        state={setOpenDialogSwapMember}
                                      />
                                    )}
                                  </ListItemText>
                                </List>
                              );
                            })}
                        </Accordion>

                        <Box
                          sx={{
                            width: '10em',
                            height: 'max-content',
                            padding: '1.2em 0em',
                            display: 'flex',
                            gap: '2em',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Tooltip title="Rename Group" placement="top">
                            <IconButton
                              edge="end"
                              aria-label="edit"
                              sx={{
                                width: '0.8em',
                                height: '0.8em',
                                '&: hover': {
                                  backgroundColor: 'transparent',
                                  color: '#007FFF',
                                },
                              }}
                            >
                              <BorderColorOutlined sx={{ fontSize: '0.9em' }} />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete Group" placement="top">
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              sx={{
                                width: '0.8em',
                                height: '0.8em',
                                '&: hover': {
                                  backgroundColor: 'transparent',
                                  color: '#FF3B00',
                                },
                              }}
                            >
                              <DeleteOutlined />
                            </IconButton>
                          </Tooltip>

                          <Tooltip
                            title="Add members in this group"
                            placement="top"
                          >
                            <IconButton
                              onClick={handleCreateAddMembers}
                              edge="end"
                              aria-label="add"
                              sx={{
                                width: '0.9em',
                                height: '0.9em',
                                '&: hover': {
                                  backgroundColor: '#31B13E',
                                  color: 'white',
                                },
                              }}
                            >
                              <AddCircleOutline sx={{ fontSize: '0.9em' }} />
                            </IconButton>
                          </Tooltip>
                          {opendialogAddMembers && (
                            <GROUPS_ADDMEMBER
                              open={opendialogAddMembers}
                              close={handleCreateCloseAddMembers}
                              maxWidth="md"
                              state={setOpenDialogAddMembers}
                            />
                          )}
                        </Box>
                      </Box>
                    );
                  })}

                <Button
                  variant="contained"
                  startIcon={<AddCircle sx={{ color: '#615F79' }} />}
                  sx={{
                    marginTop: '2em',
                    width: '100%',
                    justifyContent: 'flex-start',
                    height: 'auto',
                    backgroundColor: '#FAF8F9',
                    boxShadow: 'none',
                    color: '#3F3D56',
                    fontSize: '0.7em',
                    fontWeight: '600',
                    textTransform: 'Capitalize',
                    boxShadow: 'none',
                    '&: hover': {
                      backgroundColor: '#FAF8F9',
                      boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
                    },
                  }}
                >
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

export default Make_groups_notstarted;
