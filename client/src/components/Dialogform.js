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

function Dialogform({
  children,
  title,
  btn,
  open,
  close,
  maxWidth,
  divider,
  ...rest
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Dialog
        fullScreen={fullScreen && false}
        open={open}
        onClose={close}
        maxWidth={maxWidth}
        {...rest}
      >
        <Grid container justifyContent="flex-end">
          <IconButton
            onClick={close}
            sx={{
              margin: '0.3em 0.5em 0em 0em',
              height: '1.2em',
              width: '1.2em',
            }}
          >
            <CloseIcon sx={{ fontSize: '0.8em' }} />
          </IconButton>
        </Grid>
        {divider && (
          <DialogTitle sx={{
          fontWeight: "600",
          fontSize: "1.2em",
          color: "#3F3D56",
          padding: "0.5em 1.2em",
          marginBottom: "0.5em" }}>
            {title}
          </DialogTitle>
        )}
        <DialogContent sx={{ padding: '0em', height: 'auto' }}>
          {children}
        </DialogContent>
        {btn && (
          <DialogActions sx={{ padding: '0.5em 1.5em 1.5em 0.8em' }}>
            {btn}
          </DialogActions>
        )}
      </Dialog>
    </>
  );
}

export default Dialogform;
