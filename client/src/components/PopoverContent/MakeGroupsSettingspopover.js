import React from 'react';
import { List, ListItem, ListItemIcon, Divider, Box, Checkbox, Typography, Input } from '@mui/material';
import { BorderColorOutlined, DeleteOutlineOutlined } from "@mui/icons-material";

function MakeGroupsSettingspopover() {

  return (
    <Box sx = {{
        width: "relative",
        height: "max-content",
        padding: "0.8em 1.5em",
        backgroundColor: "#FCFCFC",
        border: "1px solid #DBDBDB",
    }}>
        <Box className = "Required-button" sx = {{
            width: "relative",
            height: "auto",
            display: "flex",
            alignItems: "center"
        }}>
            <Checkbox sx={{
                color: '#BABABA',
                height: '2.2em',
                width: '2.2em',
                marginRight: "0.3em"
            }}/>
            <Typography sx = {{
                color: '#3F3D56',
                fontSize: "0.8em",
                fontWeight: "400",
                height: "max-content",
                width: "relative",
            }}>
                Allow students to return to the main session at any time.
            </Typography>
        </Box>

        <Box className = "Required-button" sx = {{
            width: "relative",
            height: "auto",
            display: "flex",
            alignItems: "center"
        }}>
            <Checkbox sx={{
                color: '#BABABA',
                height: '2.2em',
                width: '2.2em',
                marginRight: "0.3em"
            }}/>
            <Typography sx = {{
                color: '#3F3D56',
                fontSize: "0.8em",
                fontWeight: "400",
                height: "max-content",
                width: "relative"
            }}>
                Created groups will automatically close after (
            </Typography>

            <Input type = "number" sx = {{ 
                border: '1px solid #C4C4C4',
                borderRadius: '0.3em',
                padding: '0em 0.3em 0em 0.9em ',
                margin: "0em 0.2em",
                width: '5em',
                fontSize: '0.8em',
                fontWeight: '600',
                color: '#007FFF',
                '&: hover': {
                  border: '1px solid #212121',
                }
            }}/>

            <Typography sx = {{
                color: '#3F3D56',
                fontSize: "0.8em",
                fontWeight: "400",
                height: "max-content",
                width: "relative",
            }}>
                minutes.)
            </Typography>
        </Box>

        <Box className = "Required-button" sx = {{
            width: "relative",
            height: "auto",
            display: "flex",
            alignItems: "center",
            paddingLeft: "2em"
        }}>
            <Checkbox sx={{
                color: '#BABABA',
                height: '2.2em',
                width: '2.2em',
                marginRight: "0.3em"
            }}/>
            <Typography sx = {{
                color: '#3F3D56',
                fontSize: "0.8em",
                fontWeight: "400",
                height: "max-content",
                width: "relative"
            }}>
                Notify me when the time is up.
            </Typography>
        </Box>

        <Box className = "Required-button" sx = {{
            width: "relative",
            height: "auto",
            display: "flex",
            alignItems: "center"
        }}>
            <Checkbox sx={{
                color: '#BABABA',
                height: '2.2em',
                width: '2.2em',
                marginRight: "0.3em"
            }}/>
            <Typography sx = {{
                color: '#3F3D56',
                fontSize: "0.8em",
                fontWeight: "400",
                height: "max-content",
                width: "relative"
            }}>
                Set a countdown timer when the groups is closing. (
            </Typography>

            <Input type = "number" sx = {{ 
                border: '1px solid #C4C4C4',
                borderRadius: '0.3em',
                padding: '0em 0.3em 0em 0.9em ',
                margin: "0em 0.2em",
                width: '5em',
                fontSize: '0.8em',
                fontWeight: '600',
                color: '#007FFF',
                '&: hover': {
                  border: '1px solid #212121',
                }
            }}/>

            <Typography sx = {{
                color: '#3F3D56',
                fontSize: "0.8em",
                fontWeight: "400",
                height: "max-content",
                width: "relative",
            }}>
                seconds.)
            </Typography>
        </Box>
    </Box>
  );
}

export default MakeGroupsSettingspopover;
