import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Dialogform({ children, title, btn, open, close, maxWidth }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={close}
        maxWidth={maxWidth}
      >
        <Grid container justifyContent="flex-end">
          <Grid item sx={{ mt: 1, mr: 1 }}>
            <IconButton onClick={close}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <DialogTitle>
          <Divider textAlign="left">{title}</Divider>
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions sx={{ mb: 2, mr: 2 }}>{btn}</DialogActions>
      </Dialog>
    </>
  );
}

export default Dialogform;
