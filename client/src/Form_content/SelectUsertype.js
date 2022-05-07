import React from 'react';
import Dialogform from '../components/Dialogform';
import {
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@mui/material';
import { CallEnd } from '@mui/icons-material';
import Professor from '../assets/ImageJaven/Professor.png';
import Student from '../assets/ImageJaven/Student.png';
import { useHistory } from 'react-router-dom';

function SelectUsertype({ open, close, maxWidth, signIn, googleData }) {
  const history = useHistory();
  const dataUsertype = [
    {
      usertypeIllustration: (
        <img src={Professor} alt="Professor" style={{ height: '10em' }} />
      ),
      usertypeName: 'Professor',
      usertypeDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
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
      </Dialogform>
    </div>
  );
}

export default SelectUsertype;
