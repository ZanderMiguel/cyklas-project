import React from 'react';
import { Grid, Box, Typography, Avatar } from '@mui/material';
import {
  Star,
  SchoolOutlined
} from '@mui/icons-material';
import AvatarIcon from "../assets/ImageJaven/Avatar.png";
import ProfileBackground from "../assets/ImageJaven/ProfileBackground.png";

function DashboardStatisticsV2() {
  return (
    <>
          <Grid xs = {8}
          sx = {{
              paddingLeft: "0.5em"
          }}>   
          <Box
          sx = {{ 
            width: 'relative',
              height: '10em',
              padding: '0.7em 0.8em',
              backgroundColor: 'white',
              backgroundImage: `url(${ProfileBackground})`,
                backgroundSize: 'cover',
              
             }}>
                 <Box
                sx = {{
                    display: "flex",
                    gap: "0.8em",
                    height: "auto",
                    width: "relative"
                }}>
                    <Avatar src = {AvatarIcon} alt = "Avatar" sx = {{ height: "4em", width: "4em" }}/>

                    <Box
                    sx = {{
                        height: "auto",
                        width: "auto"
                    }}>
                        <Typography children = "Paul Rudd"
                        sx = {{
                            marginTop: "0.3em",
                            fontSize: "1.2em",
                            fontWeight: "600",
                            color: "#3F3D56",
                            height: "max-content"
                        }}/>

                        <Typography children = "completed this subject Embedded Programming"
                        sx = {{
                            fontSize: "0.8em",
                            fontWeight: "500",
                            color: "#8E8E8E",
                            height: "max-content",
                            marginBottom: "0.5em"
                        }}/>
                    </Box>
                </Box>

                <Box
                sx = {{
                    display: "flex",
                    gap: "0.5em",
                    alignItems: "center",
                    width: "relative",
                    height: "auto",
                    paddingLeft: "0.5em",
                    marginTop: "1em",
                }}>
                    <Star sx = {{ color: "#F9A826", fontSize: "2em" }}/>

                    <Typography children = "97.7 Ratings"
                        sx = {{
                            fontSize: "1.3em",
                            fontWeight: "700",
                            color: "#F9A826",
                            height: "max-content",
                            textTransform: "Uppercase"
                        }}/>
                </Box>
             </Box>
               
          </Grid>

          <Grid xs = {4} sx = {{ paddingLeft: "0.5em" }}>
          {/* <Box
              sx={{
                width: 'relative',
                height: '10em',
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                padding: '1em 0em 0em 0em',
                backgroundColor: 'white'
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '1em',
                  width: 'relative',
                  margin: '0em 1em',
                }}
              >
                <Box sx={{ height: 'auto', width: 'auto' }}>
                    <Box
                        sx={{
                        height: '2.8em',
                        width: '2.8em',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '3em',
                        backgroundColor: '#FF8000',
                        }}
                    >
                        <SchoolOutlined sx={{ color: 'white', fontSize: '2em' }} />
                    </Box>
                </Box>

                <Box sx={{ height: 'auto', width: 'relative' }}>
                  <Typography
                    sx={{
                      color: '#8E8E8E',
                      fontSize: '0.8em',
                      fontWeight: '500',
                      width: 'auto',
                      height: 'auto',
                      textTransform: 'Capitalize',
                    }}
                  >
                    Total Students in this room
                  </Typography>

                  <Typography
                    noWrap
                    sx={{
                      color: '#615F79',
                      fontSize: '1.8em',
                      fontWeight: '600',
                      width: 'relative',
                      height: 'auto',
                      wordBreak: 'break-all',
                      textTransform: 'Uppercase',
                    }}
                  >
                    223
                  </Typography>
                </Box>
              </Box>
              
              <Box
                sx={{
                display: 'flex',
                gap: '0.5em',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'relative',
                margin: '0.5em 0em 0em 0em',
                padding: '0.4em',
                backgroundColor: '#F0F0F0',
                }}
            >
                <Typography
                sx={{
                    color: '#8E8E8E',
                    fontSize: '0.7em',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    height: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
                ></Typography>

                <Typography
                sx={{
                    color: '#8E8E8E',
                    fontSize: '0.7em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    height: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
                >
                No New Added Student Today
                </Typography>
            </Box>
            </Box> */}


            <Box
              sx={{
                width: 'relative',
                height: '10em',
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
                padding: '1em 0em 0em 0em',
                backgroundColor: 'white',
                border: "2px solid #007FFF"
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: '1em',
                  width: 'relative',
                  margin: '0em 1em',
                }}
              >
                <Box sx={{ height: 'auto', width: 'auto' }}>
                    <Box
                        sx={{
                        height: '2.8em',
                        width: '2.8em',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '3em',
                        backgroundColor: '#FF8000',
                        }}
                    >
                        <SchoolOutlined sx={{ color: 'white', fontSize: '2em' }} />
                    </Box>
                </Box>

                <Box sx={{ height: 'auto', width: 'relative' }}>
                  <Typography
                    sx={{
                      color: '#8E8E8E',
                      fontSize: '0.8em',
                      fontWeight: '500',
                      width: 'auto',
                      height: 'auto',
                      textTransform: 'Capitalize',
                    }}
                  >
                    Total Students in this room
                  </Typography>

                  <Typography
                    noWrap
                    sx={{
                      color: '#615F79',
                      fontSize: '1.8em',
                      fontWeight: '600',
                      width: 'relative',
                      height: 'auto',
                      wordBreak: 'break-all',
                      textTransform: 'Uppercase',
                    }}
                  >
                    223
                  </Typography>
                </Box>
              </Box>
              
              <Box
                sx={{
                display: 'flex',
                gap: '0.5em',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'relative',
                margin: '0.5em 0em 0em 0em',
                padding: '0.4em',
                backgroundColor: '#007FFF',
                }}
            >
                <Typography
                sx={{
                    color: 'white',
                    fontSize: '0.7em',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    height: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
                ></Typography>

                <Typography
                sx={{
                    color: 'white',
                    fontSize: '0.7em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    height: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
                >
                (2) New Added Student Today
                </Typography>
            </Box>
            </Box>
          </Grid>
    </>
  );
}

export default DashboardStatisticsV2;
