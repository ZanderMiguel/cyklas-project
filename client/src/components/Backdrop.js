import React from 'react';
import BackDrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import FileViewer, { DocViewerRenderers } from 'react-doc-viewer';
import './ComponentStyles.css';
function Backdrop({ open, close, file }) {
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
        pluginRenderers={DocViewerRenderers}
        documents={[
          {
            uri: `https://frozen-mountain-12506.herokuapp.com/static/${file.filename}`,
          },
        ]}
        config={{
          header: {
            disableHeader: false,
            disableFileName: false,
            retainURLParams: false,
          },
        }}
        style={{ height: '100vh', width: '70%' }}
      />
    </BackDrop>
  );
}

export default Backdrop;
