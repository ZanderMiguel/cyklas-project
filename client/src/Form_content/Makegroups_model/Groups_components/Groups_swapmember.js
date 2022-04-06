import React from 'react';
import Dialogform from '../../../components/Dialogform';
import { Divider, Grid, Typography, Avatar, Box, Checkbox, Button, FormControlLabel } from '@mui/material';
import AvatarIcon from '../../../assets/ImageJaven/Avatar.png';
import GroupsIcon from '../../../assets/ImageJaven/GroupsIcon.png';

const dataGroups = [
    {
        groupName: "Group 1",
        totalMembers: "3",
        children: [
            {
                avatar: <Avatar src={AvatarIcon} />,
                memberName: "zander"
            },
            {
                avatar: <Avatar src={AvatarIcon} />,
                memberName: "letsgo"
            }
        ]
    },
    {
        groupName: "Group 2",
        totalMembers: "2",
        children: [
            {
                avatar: <Avatar src={AvatarIcon} />,
                memberName: "javen"
            }
        ]
    }
];

function Groups_swapmember({ open, close, maxWidth }) {
  return (
      <>
      <Dialogform open={open} close={close} maxWidth={maxWidth}
    //   btn={
    //     <Button variant="contained" sx = {{ 
    //         backgroundColor: "#0069D3",
    //         color: "white",
    //         fontSize: "0.8em",
    //         fontWeight: "600",
    //         textTransform: "Capitalize",
    //         padding: "0.3em 3em",
    //         "&: hover": {
    //             backgroundColor: "#005DC3"
    //         }
    //         }}>
    //           Move
    //       </Button>
    //   }
      >
        <Grid container sx = {{ height: "auto", padding: "0em 2em" }}>
          <Grid item xs = {12}>
          <Box sx = {{ borderRadius: "0.3em", border: "1px solid #DBDBDB", backgroundColor: "#FCFCFC", padding: "0.1em 0.5em", width: "auto", height: "auto", display: "flex", gap: "0.5em", alignItems: "center" }}>
                    <Avatar src={AvatarIcon} />

                    <Typography sx={{
                                color: '#3F3D56',
                                fontSize: '0.8em',
                                fontWeight: '600',
                                width: '20em',
                                height: 'auto'
                              }}>
                              zander
                    </Typography>
                </Box>
                <Typography sx = {{
                      color: "#3F3D56",
                      fontSize: "1.2em",
                      fontWeight: "600",
                      height: "relative",
                      width: "relative",
                      display: "flex",
                      alignItems: "center",
                      margin: "0.5em 0em 0em 0em",
                      paddingBottom: "1em",
                      borderBottom: "1px solid #DBDBDB"
                  }}>
                      Swap this student to:
                </Typography>
                
                {dataGroups.map(function(items, index) {
                    return (
                        <>
                        <Box key = {index} sx = {{ padding: "0.5em 1.5em", borderRadius: "0.3em", margin: "0.5em 0em", width: "relative", height: "auto", display: "flex" }}>
                        <img src = {GroupsIcon} style = {{ width: "2em", height: "2em", marginRight: "0.8em" }}/>

                        <Typography sx = {{
                            color: "#3F3D56",
                            fontSize: "1em",
                            fontWeight: "500",
                            height: "relative",
                            width: "40em",
                            paddingRight: "1em",
                            flexGrow: 1,
                            display: "flex",
                            alignItems: "center"
                        }}>
                            {items.groupName}
                        </Typography>

                        <Typography sx = {{
                            color: "#3F3D56",
                            fontSize: "0.8em",
                            fontWeight: "500",
                            height: "relative",
                            width: "auto",
                            textAlign: "right",
                            display: "flex",
                            alignItems: "center"
                        }}>
                            {items.totalMembers}
                        </Typography>
                        </Box>

                        <Divider sx = {{ margin: "0em 0em 0em 1.5em" }}/>

                        {items.children.map((items2, index) => {
                                    return (
                                        <Box key = {index} sx = {{ padding: "0.2em 1em 0.2em 1.5em", borderRadius: "0.3em", width: "relative", height: "auto", display: "flex", gap: "0.5em", "&: hover": { cursor: "pointer", borderRadius: "0.3em", border: "1px solid #DBDBDB", backgroundColor: "#FCFCFC" } }}>
                                        {items2.avatar}
                                        
                                        <Typography sx = {{
                                            color: "#3F3D56",
                                            fontSize: "0.8em",
                                            fontWeight: "600",
                                            height: "relative",
                                            width: "auto",
                                            flexGrow: 1,
                                            display: "flex",
                                            alignItems: "center"
                                        }}>
                                            {items2.memberName}
                                        </Typography>
                                        </Box>
                                    )
                                })}
                        </>

                        
                    )
                })}
                
          </Grid>
      </Grid>
      </Dialogform>
      </>
      
  );
}

export default Groups_swapmember;

