import React from 'react';
import {
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
  Tooltip,
} from '@mui/material';
import { Delete, DeleteOutlined, DoorFrontOutlined } from '@mui/icons-material';
import useStyle from './Styles/People_table_style';

function Memberstable({ members }) {
  const { designs } = useStyle();
  return (
    <>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <Box className="Total" sx={designs.Total_Style}>
          </Box>
          <Box sx={designs.Professor_Container_Style}>
            <Box
              className="container"
              sx={designs.Professor_Container_Sub_Style}
            >
              <Typography sx={designs.Professor_Typography_Style}>
                Professor
              </Typography>
              <Box flexGrow={1} />
              <Tooltip title="Leave Room" placement="right">
                <IconButton>
                  <DoorFrontOutlined />
                </IconButton>
              </Tooltip>
            </Box>
            <Divider />
            <Grid item xs={12}>
              <List sx={designs.List_Style}>
                {members &&
                  members.map((items, index) => {
                    return (
                      <div key={index}>
                        {items.userType === 'Professor' && (
                          <ListItem key={index} sx={designs.ListItem_Style}>
                            <ListItemAvatar>
                              <Avatar src={items.image} />
                            </ListItemAvatar>
                            <ListItemText>
                              <Typography sx={designs.Prof_Typography_Style}>
                                {items.firstName} {items.lastName}
                              </Typography>
                            </ListItemText>
                          </ListItem>
                        )}
                      </div>
                    );
                  })}
              </List>
            </Grid>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className="Total" sx={designs.Total_Style}>
            <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

            <Typography sx={designs.TotalStud_Typography_Style}>
              5 Students
            </Typography>
          </Box>

          <Box sx={designs.Student_Container_Style}>
            <Box className="container" sx={designs.Student_Container_Sub_Style}>
              <Typography sx={designs.Students_Typography_Style}>
                Students
              </Typography>
              <Box flexGrow={1} />
              <Tooltip title="Remove All Students" placement="right">
                <IconButton>
                  <DeleteOutlined />
                </IconButton>
              </Tooltip>
            </Box>
            <Divider />

            <Grid item xs={12}>
              {members && (members.userType === 'Student'.length) === 0 && (
                <center>
                  <h1> No one added yet</h1>
                </center>
              )}
              <List sx={designs.List_Style}>
                {members &&
                  members.map((items, index) => {
                    return (
                      <div key={index}>
                        {items.userType === 'Student' && (
                          <>
                            <ListItem sx={designs.ListItem_Style}>
                              <ListItemAvatar>
                                <Avatar src={items.image} />
                              </ListItemAvatar>

                              <ListItemText>
                                <Typography
                                  sx={designs.Student_Typography_Style}
                                >
                                  {items.firstName} {items.lastName}
                                </Typography>
                              </ListItemText>

                              <Tooltip
                                title="Remove this student"
                                placement="right"
                              >
                                <IconButton edge="end" aria-label="delete">
                                  <DeleteOutlined />
                                </IconButton>
                              </Tooltip>
                            </ListItem>
                          </>
                        )}
                      </div>
                    );
                  })}
              </List>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Memberstable;
