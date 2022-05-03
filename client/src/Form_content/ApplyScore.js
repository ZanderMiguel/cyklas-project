import React from 'react';
import Dialogform from '../components/Dialogform';
import { Grid, Box, Typography, Button, Avatar, Tooltip, Checkbox } from '@mui/material';
import { MicOffOutlined } from '@mui/icons-material';
import AvatarIcon from "../assets/ImageJaven/Avatar.png"

const dataMember = [
    {
      avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
      memberName: 'Paul Rudd (You)',
    },
    {
      avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
      memberName: 'Tom Hiddleston',
    },
    {
      avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
      memberName: 'Sebastian Stan',
    },
    {
      avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
      memberName: 'Robert Downey Jr.',
    },
    {
      avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
      memberName: 'Mark Ruffalo',
    },
    {
      avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
      memberName: 'Elizabeth Olsen',
    },
    {
      avatar: <Avatar alt="Remy Sharp" src={AvatarIcon} />,
      memberName: 'Josh Brolin',
    },
];

function ApplyScore({ open, close, maxWidth }) {
  return (
    <div>
      <Dialogform
        open={open}
        close={close}
        maxWidth={maxWidth}
        btn={
          <Box
            sx={{
              display: 'flex',
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1em",
              height: 'auto',
              width: '100%'
            }}>
            
            <Button
              children = "Apply"
              variant="contained"
              sx={{
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                padding: '0.3em 3em',
                boxShadow: "none"
              }}/>

              <Typography
                sx={{
                margin: '0em 2em',
                color: '#8E8E8E',
                fontSize: '0.7em',
                fontWeight: '500',
                width: 'relative',
                height: 'max-content',
                textAlign: "center"
                }}>
                The points from the criteria will be graded <br/>
                to the selected students.
                </Typography>

          </Box>

            
        }>
        <Grid item xs={12}>
            {dataMember.map(function(items, index) {
                return (
                    <Box key = {index}
                    sx={{
                        width: 'relative',
                        height: 'auto',
                        display: 'flex',
                        gap: '0.5em',
                        alignItems: 'center',
                        padding: '0.2em 0.4em 0.2em 0.2em',
                        margin: '0.3em 1.3em',
                    }}
                    >

                    <Checkbox 
                        sx = {{ 
                        color: "#A9A9A9",
                        height: "auto",
                        width: "auto",
                        padding: "0em",
                        backgroundColor: "transparent",
                        "&: hover": {
                            backgroundColor: "transparent"
                        }
                        }}/>

                    {items.avatar}

                    <Typography
                        children={items.memberName}
                        sx={{
                        color: '#3F3D56',
                        fontSize: '0.8em',
                        fontWeight: '500',
                        height: 'max-content',
                        width: '14em',
                        '&: hover': {
                            cursor: 'default',
                        },
                        }}
                    />

                    <Box flexGrow={1} />

                    <Tooltip title="This member's mic is in mute" placement="top">
                        <Box
                        sx={{
                            height: '1.5em',
                            width: '1.5em',
                            padding: '0.3em',
                            backgroundColor: '#A9A9A9',
                            borderRadius: '5em',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        >
                        <MicOffOutlined
                            sx={{ fontSize: '0.9em', color: 'white' }}
                        />
                        </Box>
                    </Tooltip>
                    </Box>
                )
            })}
        </Grid>
      </Dialogform>
    </div>
  );
}

export default ApplyScore;
