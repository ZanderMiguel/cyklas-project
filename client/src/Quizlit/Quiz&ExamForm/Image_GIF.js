import React from 'react';
import axios from 'axios';
import Dialogform from '../../components/Dialogform';
import Pagination from '../../components/Pagination';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box, Typography, Button, Divider } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import ReactGiphySearchbox from 'react-giphy-searchbox';

function Image_GIF({ open, close, maxWidth, setImage }) {
  return (
    <>
      <Dialogform open={open} close={close} maxWidth={maxWidth}>
        <ToastContainer
          position="top-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        <Box width="100%">
          <Button fullWidth startIcon={<UploadIcon />} vairant="text">
            Upload Image
          </Button>
        </Box>
        <Divider
          children={<Typography children="or" />}
          sx={{ mt: 2, mb: 2 }}
        />

        <ReactGiphySearchbox
          apiKey="XxX3x09HDBNVWLAGVGLndWDiXNmw42gO"
          onSelect={(item) => setImage(item.images.fixed_width.url)}
          gifListHeight="500px"
          masonryConfig={[
            { columns: 3, imageWidth: 140, gutter: 5 },
            { mq: '700px', columns: 4, imageWidth: 140, gutter: 5 },
          ]}
        />
      </Dialogform>
    </>
  );
}

export default Image_GIF;
