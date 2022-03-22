import React from 'react'
import moment from 'moment';
import {Box,Typography,Avatar, IconButton} from '@mui/material'
import useStyles from '../Styles/Announce_style';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';


function Comments({commentContent}) {
    const { designs } = useStyles();
  return (
    <>
    <Box className="View-comments" sx={designs.View_Comments_Style}>
                <Typography noWrap sx={designs.View_Comments_Typography_Style}>
                2
                </Typography>
                <Typography noWrap sx={designs.View_Comments_Typography_Style}>
                Comments
                </Typography>
                
              </Box>
      <Box className='comments-wrapper'>
       <Box className="User" sx={designs.User_Style}>
                <Avatar
                  alt="Remy Sharp"
                  src={AvatarIcon}
                  sx={{margin: '1px 0px',
                  height: '40px',
                  width: '40px',}}
                />
                
                <Box className="User-date" sx={designs.User_Date_Style}>
                    <Box display='flex' alignItems='center'>
                  <Typography noWrap sx={designs.UserName_Typography_Style}>
                    Lester
                  </Typography>

                  <Box className="date" sx={designs.Date_Style, {ml: '0.6em'}}>
                    <Typography sx={designs.Date_Typography_Style}>
                      {moment().format('MMMM DD YYYY / h:mm a')}
                    </Typography>
                  </Box>
                  </Box>
                  <Box className='content' fontSize="0.9rem">Content of the the comment here</Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Comments