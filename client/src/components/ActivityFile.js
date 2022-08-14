import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import Backdrop from './Backdrop';
import Wordfile from '../assets/ImageJaven/Wordfile.png';
import Pdffile from '../assets/ImageJaven/Pdffile.png';
import Excelfile from '../assets/ImageJaven/Excelfile.png';
import Powerpointfile from '../assets/ImageJaven/Powerpointfile.png';
import Imagee from '../assets/ImageJaven/Imagee.png';
import Videoo from '../assets/ImageJaven/Videoo.png';
import Filee from '../assets/ImageJaven/Filee.png';
import axios from 'axios';
function ActivityFile({ item }) {
  const [open, setOpen] = React.useState(false);
  const previewData = React.useRef(null);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    console.log(item);
    axios
      .post('http://localhost:5000/activity/preview', {
        file: item,
      })
      .then((res) => {
        console.log(res.data);
        previewData.current = res.data.myFile[0].file;
        setOpen(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Tooltip title="Click to download file" placement="top-start">
        <Box
          onClick={handleToggle}
          className="Attach-file"
          sx={{
            backgroundColor: 'white',
            width: '100%',
            height: 'auto',
            padding: '0.5em 0.9em',
            display: 'flex',
            alignItems: 'center',
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
            src={
              item?.includes('.docx')
                ? Wordfile
                : item?.includes('.xls')
                ? Excelfile
                : item?.includes('.jpg') || item?.includes('.png')
                ? Imagee
                : item?.includes('.mp4')
                ? Videoo
                : item?.includes('.ppt') || item?.includes('.pptx')
                ? Powerpointfile
                : item?.includes('.pdf')
                ? Pdffile
                : item?.includes('.txt') && Filee
            }
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
                height: 'auto',
                flexGrow: 1,
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
                : item?.includes('.mp4')
                ? 'VIDEO FILE'
                : item?.includes('.jpg') || item?.includes('.png')
                ? 'IMAGE FILE'
                : item?.includes('.ppt') || item?.includes('.pptx')
                ? 'POWER POINT FILE'
                : item?.includes('.pdf')
                ? 'PDF FILE'
                : item?.includes('.txt') && 'FILE'}
            </Typography>
          </Box>
        </Box>
      </Tooltip>
      {open && (
        <Backdrop
          open={open}
          close={() => setOpen(false)}
          file={previewData.current}
        />
      )}
    </>
  );
}

export default ActivityFile;
