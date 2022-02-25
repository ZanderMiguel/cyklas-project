import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import ChangeState from './AllStyles';
import { CsPaper, CsTxtFld, CustomButton } from './CustomButton';
import Avatar from '../assets/imageOrense/Avatar.png';
import PhotoIcon from '../assets/imageOrense/photoicon.png';

// default value of Settings.

function MainSettings() {
  const { Styles } = ChangeState();
  return (
    <Container maxWidth="md">
      <Box style={Styles.box}>
        <CsPaper variant="" design={Styles.paper1}>
          <div className="header" style={Styles.sty1}>
            <Typography noWrap variant="h5">
              Personal Information
            </Typography>
          </div>
          <div className="divstack" style={Styles.sty}>
            <Typography style={Styles.typo} noWrap variant="caption">
              First name
            </Typography>
            <CsTxtFld
              style={Styles.field}
              size="small"
              id="outlined-basic"
              variant="outlined"
            />
            <Typography style={Styles.typo} noWrap variant="caption">
              Last name
            </Typography>
            <CsTxtFld
              style={Styles.field}
              size="small"
              id="outlined-basic"
              variant="outlined"
            />
            <Typography style={Styles.typo} noWrap variant="caption">
              Gender
            </Typography>
            <CsTxtFld
              style={Styles.field}
              size="small"
              id="outlined-basic"
              variant="outlined"
            />
            <Typography style={Styles.typo} noWrap variant="caption">
              Contact No. / Mobile No.
            </Typography>
            <CsTxtFld
              style={Styles.field}
              size="small"
              id="outlined-basic"
              variant="outlined"
            />
            <div className="save-btn" style={Styles.btnsave}>
              <CustomButton design={Styles.save} value={'Save'} />
            </div>
          </div>
        </CsPaper>
        <CsPaper variant="outlined" style={Styles.paper2}>
          <Stack
            spacing={5}
            mt={3}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography align="center" variant="h6">
              Account Picture
            </Typography>
            <img src={Avatar} alt="" style={Styles.img} />
            <CustomButton
              startIcon={<img src={PhotoIcon} />}
              style={Styles.profile}
              value="Change Profile Picture"
            />
          </Stack>
        </CsPaper>
      </Box>
    </Container>
  );
}

export default MainSettings;
