import React from 'react';
import {
  Container,
  Box,
  Typography,
  Divider,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import useStyle from './Styles/People_table_layout_style';

function MembersTableStud({ members }) {
  const { designs } = useStyle();
  return (
    <Box sx={{ width: 'relative', height: 'auto' }}>
      <Grid container rowSpacing={1}>
        <Grid item xs={12}>
          <Box className="Total" sx={designs.Total_Style}>
            <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

            <Typography sx={designs.TotalProf_Typography_Style}>
              1 Professor
            </Typography>
          </Box>

          <Box sx={designs.Professor_Container_Style}>
            <Box
              className="container"
              sx={designs.Professor_Container_Sub_Style}
            >
              <Typography sx={designs.Professor_Typography_Style}>
                Professors
              </Typography>
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
              1 classmate
            </Typography>
          </Box>

          <Box sx={designs.Student_Container_Style}>
            <Box className="container" sx={designs.Student_Container_Sub_Style}>
              <Typography sx={designs.Students_Typography_Style}>
                Classmates
              </Typography>
            </Box>
            <Divider />
            <Grid item xs={12}>
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
                            </ListItem>
                            <Divider />
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
    </Box>
  );
}

export default MembersTableStud;
