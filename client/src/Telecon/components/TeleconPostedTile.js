import React from 'react';
import { Boxs as Box } from '../../components/Component';
import { Typography, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import MeetingIcon from '../../assets/ImageJaven/MeetingIcon.png';
import useStyle from '../../Quizlit/Styles/Quiz_style';

function TeleconPostedTile() {
  const { designs } = useStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickOption = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseOption = () => {
    setAnchorEl(null);
  };
  const account = Boolean(anchorEl);

  return (
    <>
          <Box sx={designs.BoxTileContainer} >
            <Box sx={designs.QuizContainer}>
              <img
                src={MeetingIcon}
                alt="MeetingIcon"
                style={{
                  height: '2.2em',
                  margin: '0em 0.8em 0em 0em',
                }}
              />

              <Box
                sx={designs.QuizName_User_Date}
              >
                <Box sx={designs.QuizName}>
                  <Typography noWrap sx={designs.Quiz}>
                    Blank Canvas
                  </Typography>
                </Box>
              </Box>

                <Box flexGrow = {1}/>

              <Box sx={designs.BoxOptions}>
                <IconButton
                  sx={designs.IconButtonOptions}
                >
                  <MoreVert sx={designs.MoreVertIcon} />
                </IconButton>
              </Box>
            </Box>
          </Box>
    </>
  );
}

export default TeleconPostedTile;
