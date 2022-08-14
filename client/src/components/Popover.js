import React from 'react';
import Popover from '@mui/material/Popover';

function Popovercomp({ children, anchorEl, onClose, id, open, ...rest }) {
  return (
    <Popover
      id={id}
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      PaperProps={{ elevation: 2, overflow: 'auto' }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...rest}
    >
      {children}
    </Popover>
  );
}

export default Popovercomp;
