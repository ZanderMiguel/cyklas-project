import React from 'react';
import Dialogform from '../components/Dialogform';
import { Grid, Box, Typography, Paper } from '@mui/material';
import Professor from '../assets/ImageJaven/Professor.png';
import Student from '../assets/ImageJaven/Student.png';
import { useHistory } from 'react-router-dom';
import { Announcement } from "@mui/icons-material";

function SelectUsertype({ open, close, maxWidth, signIn, googleData }) {
  const history = useHistory();
  const dataUsertype = [
    {
      usertypeIllustration: (
        <img src={Professor} alt="Professor" style={{ height: '10em' }} />
      ),
      usertypeName: 'Professor',
      usertypeDescription:
        'can create rooms, invite members or students, can modify categories for grading system. A professor also have the access to conduct instant video conferencing and live quizzes.',
      onClick: () => {
        signIn({ userType: 'Professor', ...googleData.current });
        close();
        history.push('/dashboard');
      },
    },

    {
      usertypeIllustration: (
        <img src={Student} alt="Student" style={{ height: '10em' }} />
      ),
      usertypeName: 'Student',
      usertypeDescription:
        'can partake with actvities inside rooms that joined in, can also join instant video conference and participate with the live quizzes.',
      onClick: () => {
        signIn({ userType: 'Student', ...googleData.current });
        close();
        history.push('/dashboard');
      },
    },
  ];

  return (
    <div>
      <Dialogform open={open} close={close} maxWidth={maxWidth} btn>
        <Grid item xs={12} sx={{ margin: '0em 2em' }}>
          <Box
            sx={{
              width: '30em',
              height: 'auto',
              paddingLeft: '3em',
            }}
          >
            <Typography
              sx={{
                width: 'relative',
                textAlign: 'center',
                color: '3F3D56',
                fontSize: '1.3em',
                fontWeight: '600',
                height: 'max-content',
              }}
            >
              Select your user type
            </Typography>

            <Typography
              sx={{
                width: 'relative',
                textAlign: 'center',
                color: '#8E8E8E',
                fontSize: '0.8em',
                fontWeight: '500',
                height: 'max-content',
              }}
            >
              To continue the application we need to customize your role.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            gap: '0.8em',
            margin: '1.5em 2em 0.5em 2em',
          }}
        >
          {dataUsertype.map(function (items, index) {
            return (
              <Box
                key={index}
                sx={{
                  width: '50%',
                  height: 'auto',
                  padding: '2em 1.5em',
                  backgroundColor: '#FCFCFC',
                  borderRadius: '0.5em',
                  border: '2px solid transparent',
                  '&: hover': {
                    cursor: 'pointer',
                    transition: 'all 250ms',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                    border: '4px solid #007FFF',
                  },
                }}
                onClick={items.onClick}
              >
                <Box
                  sx={{
                    width: 'relative',
                    height: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.5em 0em 2.5em 0em',
                  }}
                >
                  {items.usertypeIllustration}
                </Box>

                <Typography
                  children={items.usertypeName}
                  sx={{
                    width: 'relative',
                    textAlign: 'center',
                    fontSize: '1.2em',
                    fontWeight: '600',
                    color: '#007FFF',
                  }}
                />

                <Typography
                  children={items.usertypeDescription}
                  sx={{
                    width: 'relative',
                    textAlign: 'center',
                    fontSize: '0.8em',
                    fontWeight: '500',
                    color: '#8E8E8E',
                  }}
                />
              </Box>
            );
          })}
        </Grid>

        <Box
        sx = {{
          display: "flex",
          gap: "0.5em",
          width: "relative",
          height: "auto",
          border: "2px solid #DBDBDB",
          borderRadius: "0.3em",
          margin: "0.5em 2em",
          padding: "0.5em"
        }}>
          <Announcement sx = {{ color: "#FB9C12" }}/>

          <Typography children = "NOTE: &nbsp; AFTER SELECTING A USERTYPE YOU MUST CONTINUE WITH GOOGLE AGAIN
          AND USE THIS EMAIL ADDRESS TO PROCEED"
          sx = {{
            color: "#FB9C12",
            fontSize: "0.8em",
            fontWeight: "600",
            height: "relative",
            display: "flex",
            alignItems: "center"
          }}/>
        </Box>
      </Dialogform>
    </div>
  );
}

export default SelectUsertype;
