import React from 'react';
import { Typography, Box, Button } from '@mui/material';
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
      {/* <Box sx={{
              backgroundColor: "white",
              width: '100%',
              height: 'auto',
              marginBottom: '0.5em',
              padding: '0.6em 1.2em',
              display: 'flex',
              border: ' 1px solid #DBDBDB',
              borderRadius: '0.3em',
              textDecoration: "none",
              '&: hover': {
                boxShadow:
                  'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                  textDecoration: "none"
              },
          }} >
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
                sx={{
                    width: 'auto',
      display: 'flex',
      flexGrow: 1,
      alignItems: 'center',
      height: 'relative',
      margin: '0.3em 0em 0.3em 0em',
      textDecoration: 'none',
      '&: hover': {
        cursor: 'pointer',
      },
                }}
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
          </Box> */}

      <Box
        sx={{
          backgroundColor: 'white',
          width: '100%',
          height: 'auto',
          marginBottom: '0.5em',
          padding: '0.6em 1.2em',
          display: 'flex',
          border: ' 1px solid #DBDBDB',
          borderRadius: '0.3em',
          textDecoration: 'none',
          '&: hover': {
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
            textDecoration: 'none',
          },
        }}
      >
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
            sx={{
              width: 'auto',
              display: 'flex',
              flexGrow: 1,
              alignItems: 'center',
              height: 'relative',
              margin: '0.3em 0em 0.3em 0em',
              textDecoration: 'none',
              '&: hover': {
                cursor: 'pointer',
              },
            }}
          >
            <Box sx={designs.QuizName}>
              <Typography noWrap sx={designs.Quiz}>
                Blank Canvas
              </Typography>
            </Box>
          </Box>

          <Box flexGrow={1} />

          <Button
            variant="contained"
            children="Join"
            sx={{
              textTransform: 'Capitalize',
              fontSize: '0.8em',
              fontWeight: '600',
              boxShadow: 'none',
              '&: hover': {
                boxShadow: 'none',
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default TeleconPostedTile;
