import React from 'react';
import { Container, Box, Typography, Stack } from '@mui/material';
import { CsPaper, CsTxtFld, CustomButton } from './CustomButton';
import ChangeState from './AllStyles';

// Settings/Account

function MSAccount() {
  const { Styles } = ChangeState();

  return (
    <Container maxWidth="lg">
      <Box style={Styles.box}>
        <CsPaper design={Styles.mspaper} variant="">
          <Stack spacing={2}>
            <Typography style={Styles.txt} variant="h6">
              ACCOUNT INFORMATION
            </Typography>
            <Typography style={Styles.txt} variant="body1">
              Email Address
              <Typography style={Styles.body2} variant="body2">
                The email address you use to access CyKlas
              </Typography>
            </Typography>
            <Typography style={Styles.txt} variant="body1">
              Password
              <Typography style={Styles.body2} variant="body2">
                The current password you use to access CyKlas
              </Typography>
            </Typography>
          </Stack>
        </CsPaper>
        <CsPaper design={Styles.paper1}>
          <div className="divstack" style={Styles.sty}>
            <Typography style={Styles.typo} noWrap variant="caption">
              Email Address
            </Typography>
            <CsTxtFld
              style={Styles.field}
              size="small"
              id="outlined-basic"
              defaultValue="markandrei@gmail.com"
              variant="outlined"
              type="email"
            />
            <Typography style={Styles.typo} noWrap variant="caption">
              Current Password
            </Typography>
            <CsTxtFld
              style={Styles.field}
              size="small"
              id="outlined-basic"
              variant="outlined"
              type="password"
              placeholder="Enter your current password..."
            />
            <Typography style={Styles.typo} noWrap variant="caption">
              New Password
            </Typography>
            <CsTxtFld
              style={Styles.field}
              size="small"
              id="outlined-basic"
              variant="outlined"
              type="password"
              placeholder="Enter your current password..."
            />
            <Typography style={Styles.typo} noWrap variant="caption">
              Confirm Password
            </Typography>
            <CsTxtFld
              style={Styles.field}
              size="small"
              id="outlined-basic"
              variant="outlined"
              type="password"
              placeholder="Confirm your new password"
            />
            <div className="save-btn" style={Styles.btnsave}>
              <CustomButton design={Styles.save} value={'Save'} />
            </div>
          </div>
        </CsPaper>
      </Box>
    </Container>
  );
}

export default MSAccount;
