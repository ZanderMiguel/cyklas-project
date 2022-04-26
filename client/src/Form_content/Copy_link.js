import React, { useState } from 'react';
import { Snackbar, Box, Typography, IconButton, Slide } from '@mui/material';
import { ContentCopy, CheckCircleOutlined, Close } from '@mui/icons-material';

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function Copy_link() {
  const [open, setOpen] = useState(false);
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          height: 'auto',
          width: 'auto',
          color: 'white',
          backgroundColor: '#0069D3',
          '&: hover': {
            color: 'white',
            backgroundColor: '#005DC3',
          },
        }}
      >
        <ContentCopy
          sx={{
            fontSize: '0.8em',
          }}
        />
      </IconButton>

      <Snackbar
        autoHideDuration={3000}
        TransitionComponent={TransitionUp}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <Box
          sx={{
            width: 'auto',
            height: 'auto',
            backgroundColor: '#2EA93A',
            borderRadius: '0.3em',
            padding: '0.4em 0.8em 0.4em 1.2em',
            display: 'flex',
            gap: '0.5em',
            justifyContent: 'flex-start',
            alignItems: 'center',
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
          }}
        >
          <CheckCircleOutlined sx={{ fontSize: '1.4em', color: 'white' }} />

          <Typography
            children="Link Copied!"
            sx={{
              color: 'white',
              fontWeight: '600',
              fontSize: '0.8em',
              height: 'max-content',
              width: '100%',
              paddingRight: '2.5em',
            }}
          />

          <IconButton
            sx={{ width: 'auto', height: 'auto', padding: 'none' }}
            onClick={handleClose}
          >
            <Close sx={{ fontSize: '0.7em', color: 'white' }} />
          </IconButton>
        </Box>
      </Snackbar>
    </div>
  );
}

export default Copy_link;
