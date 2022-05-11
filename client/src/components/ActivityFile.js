import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material'
import Backdrop from './Backdrop';
import Wordfile from '../assets/ImageJaven/Wordfile.png'



function ActivityFile({ item }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Tooltip  title="Click to download file" placement="top-start">
        <Box
          onClick={handleToggle}
          className="Attach-file"
          sx={{
            backgroundColor: 'white',
            width: '100%',
            height: "auto",
            padding: '0.5em 0.9em',
            display: 'flex',
            alignItems: "center",
            gap: '0.9em',
            border: '1px solid #D4D4D4',
            borderRadius: '0.3em',
            '&: hover': {
              cursor: 'pointer',
              boxShadow:
                'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
            },
          }}
        >
          <img
            src={Wordfile}
            style={{
              height: '40px',
            }}
          />

          <Box
            className="Activity-filename"
            sx={{
              width: 'auto',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
            }}
          >
            <Typography
              sx={{
                color: '#3F3D56',
                fontSize: '0.8em',
                fontWeight: '600',
                width: 'relative',
                height: 'auto',
                flexGrow: 1
              }}
            >
              {item}
            </Typography>

            <Typography
              sx={{
                color: '#3F3D56',
                fontSize: '0.7em',
                width: 'max-content',
                height: 'max-content',
              }}
            >
              {item?.includes('.docx')
                ? 'WORD FILE'
                : item?.includes('.xls')
                ? 'EXCEL FILE'
                : item?.includes('.ppt') || item?.includes('.pptx')
                ? 'POWER POINT'
                : item?.includes('.pdf')
                ? 'PDF FILE'
                : 'FILE'}
            </Typography>
          </Box>
        </Box>
      </Tooltip>
      {/* <Backdrop open={open} close={handleClose}/> */}
    </>
  );
}

export default ActivityFile;
