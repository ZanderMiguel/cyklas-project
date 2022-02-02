import React from 'react';
import Paper from '@mui/material/Paper';
import { Buttons as Button, Boxs as Box } from '../pages/Component';
import { Typography, IconButton } from '@mui/material';
import { MoreVert, AddCircle } from '@mui/icons-material';
import QuizIcon from '../assets/ImageJaven/QuizIcon.png';
function Quiz_layout({ bank }) {
  const styles = {
    hover: {
      backgroundColor: '#E7E7E7',
      boxShadow: 'none',
    },
    hover2: {
      backgroundColor: 'White',
      boxShadow: 'none',
    },
    hover3: {
      backgroundColor: '#F9F9F9',
      boxShadow: 'none',
    },

    sxStyle: {
      color: '#3F3D56',
      backgroundColor: '#E7E7E7',
      boxShadow: 'none',
      textTransform: 'Uppercase',
      fontWeight: 'bold',
      // width: "150px",
      padding: '10px 50px',
      margin: 'none',
      borderRadius: '0.4em 0em 0em 0.4em',
    },
    sxStyle2: {
      color: '#7D7B93',
      backgroundColor: 'White',
      boxShadow: 'none',
      textTransform: 'Uppercase',
      fontWeight: 'bold',
      // width: "150px",
      padding: '10px 50px',
      margin: 'none',
      borderRadius: '0.4em 0em 0em 0.4em',
    },

    sxStyleTiles1: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#3F3D56',
      textTransform: 'Uppercase',
    },
    sxStyleTiles2: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#3F3D56',
      textTransform: 'none',
    },
    sxStyleTiles3: {
      fontSize: '11px',
      fontWeight: '600',
      textTransform: 'Capitalize',
      fontStyle: 'Italic',
      color: '#3F3D56',
    },
    sxStyleTiles4: {
      fontSize: '11px',
      fontWeight: '500',
      textTransform: 'none',
      fontStyle: 'Italic',
      color: '#3F3D56',
    },
  };
  return (
    <>
      {/*       <Box classname="Add-button" width="80%" height="auto" marginRight="20px">
        <IconButton
          aria-label="add"
          sx={{
            height: '40px',
            width: '40px',
            float: 'Right',
          }}
        >
          <AddCircle
            sx={{
              color: '#49B854',
              fontSize: '40px',
            }}
          />
        </IconButton>
      </Box> */}

      {bank.map((item, idx) => {
        const { title, name, date, time } = item;
        console.log(idx);
        return (
          <Box
            className="Container-sub"
            width="100%"
            height="25%"
            marginTop="10px"
            display="flex"
            gap="20px"
            key={idx}
          >
            <Box
              className="Tiles"
              display="flex"
              paddingRight="20px"
              flexDirection="column"
              gap="5px"
              width="auto"
              height="relative"
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'White',
                  width: 'auto',
                  height: 'auto',
                  boxShadow: 'none',
                  padding: '0px',
                  margin: '0px',
                  borderRadius: '0.8em',
                }}
                hover={styles.hover3}
              >
                <Box
                  className="Tiles1"
                  width="870px"
                  height="auto"
                  display="flex"
                  gap="17px"
                  border=" 2px solid #DBDBDB"
                  borderRadius="0.8em"
                >
                  <Box className="Quiz-icon" margin="9px 0px 3px 20px">
                    <img
                      src={QuizIcon}
                      style={{
                        height: '35px',
                      }}
                    />
                  </Box>

                  <Box
                    className="Activity-name-User-date"
                    height="max-content"
                    margin="8px 0px 7px 0px"
                  >
                    <Box
                      className="Activity-name"
                      width="400px"
                      display="flex"
                      gap="5px"
                    >
                      <Typography sx={styles.sxStyleTiles1}>{title}</Typography>
                    </Box>

                    <Box
                      className="User-date"
                      width="relative"
                      display="flex"
                      gap="2px"
                    >
                      <Typography sx={styles.sxStyleTiles3}>
                        {name} (You)
                      </Typography>

                      <Typography sx={styles.sxStyleTiles4}>
                        created on {date} at {time}
                      </Typography>
                    </Box>
                  </Box>

                  <IconButton
                    aria-label="options"
                    sx={{
                      height: '32px',
                      width: '32px',
                      margin: '10px 0px 0px 328px',
                    }}
                  >
                    <MoreVert
                      sx={{
                        color: '#8E8E8E',
                        fontSize: '20px',
                      }}
                    />
                  </IconButton>
                </Box>
              </Button>
            </Box>
          </Box>
        );
      })}
    </>
  );
}

export default Quiz_layout;
