import React from 'react';
import BackDrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import FileViewer from 'react-file-viewer';
import './ComponentStyles.css';
function Backdrop({ open, close }) {
  return (
    <BackDrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        width: '100%',
      }}
      open={open}
      onClick={close}
    >
      <FileViewer
        fileType="jpg"
        filePath="https://sa.kapamilya.com/absnews/abscbnnews/media/2017/entertainment/12/01/robin-padilla-2017-112917.jpg"
      />
    </BackDrop>
  );
}

export default Backdrop;
