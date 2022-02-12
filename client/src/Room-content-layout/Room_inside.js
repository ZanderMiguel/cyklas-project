import React from 'react';
import { useParams } from 'react-router-dom';
import Announce from './Announce';
import FeedIcon from '../assets/ImageJaven/FeedIcon.png';
import ActivitiesIcon from '../assets/ImageJaven/ActivitiesIcon.png';
import MembersIcon from '../assets/ImageJaven/MembersIcon.png';

import { Container, Box, Typography, Button } from '@mui/material';

const styles = {
  hover: {
    backgroundColor: '#007fff',
    boxShadow: 'none',
  },
  hover2: {
    backgroundColor: '#F5F5F5',
    boxShadow: 'none',
  },
  sxStyle: {
    color: '#3F3D56',
    backgroundColor: '#FCFCFC',
    borderRadius: '10em',
    width: '25%',
    textTransform: 'Capitalize',
    fontWeight: 'bold',
    boxShadow: 'none',
    height: '6vh',
    fontSize: '12px',
    marginTop: '6px',
    marginRight: '15px',
  },
  sxStyle1: {
    backgroundColor: '#007FFF',
    borderRadius: '10em',
    width: '25%',
    textTransform: 'Capitalize',
    fontWeight: 'bold',
    boxShadow: 'none',
    height: '6vh',
    fontSize: '12px',
    marginTop: '6px',
    marginLeft: '15px',
    marginRight: '15px',
  },
  sxStyle3: {
    width: '50%',
    borderRadius: '0.5em',
    backgroundColor: '#FFFFF',
    marginTop: '20px',
  },
};

function Room_inside() {
  const { id } = useParams();
  console.log(id);

  return (
    <Container maxWidth="md">
      <Box
        className="Tab"
        borderTop="1.5px solid #DBDBDB"
        borderBottom="1.5px solid #DBDBDB"
        backgroundColor="#FCFCFC"
        width="100%"
        height="10vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="269px"
      >
        <Box className="Room" width="40%" height="8vh">
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: '15px',
              fontWeight: 'bold',
              color: '#3F3D56',
              textTransform: 'Uppercase',
              marginBottom: '4px',
              paddingTop: '9px',
              paddingLeft: '80px',
            }}
          >
            Embedded Programming
          </Typography>

          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: '12px',
              fontWeight: 'medium',
              color: '#3F3D56',
              textTransform: 'Uppercase',
              paddingLeft: '80px',
            }}
          >
            BSCS 3A
          </Typography>
        </Box>

        <Box className="Tab" width="40%" height="8vh">
          <Button
            variant="contained"
            startIcon={
              <img
                src={FeedIcon}
                style={{
                  marginRight: '10px',
                  height: '20px',
                }}
              />
            }
            sx={styles.sxStyle1}
            hover={styles.hover}
          >
            Feed
          </Button>

          <Button
            variant="contained"
            startIcon={
              <img
                src={ActivitiesIcon}
                style={{
                  marginRight: '10px',
                  height: '20px',
                }}
              />
            }
            sx={styles.sxStyle}
            hover={styles.hover2}
          >
            Activities
          </Button>

          <Button
            variant="contained"
            startIcon={
              <img
                src={MembersIcon}
                style={{
                  marginRight: '10px',
                  height: '20px',
                }}
              />
            }
            sx={styles.sxStyle}
            hover={styles.hover2}
          >
            Members
          </Button>
        </Box>
      </Box>
      <Announce />
    </Container>
  );
}

export default Room_inside;
