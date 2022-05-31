import React from 'react';
import Dialogform from '../../components/Dialogform';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box, Typography, Divider } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import ReactGiphySearchbox from 'react-giphy-searchbox';

function Image_GIF({ open, close, maxWidth, setImage, questionMemo, counter }) {
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
        <Box padding="0em 2em 2em 2em">
          <Box width="100%">
            <label htmlFor="getFile2">
              <Box
                sx={{
                  display: 'flex',
                  gap: '0.5em',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 'auto 10px',
                  color: '#067FFF',
                  '&: hover': {
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  },
                }}
              >
                <UploadIcon />
                <Typography
                  sx={{
                    color: '#007FFF',
                    fontSize: '1em',
                    fontWeight: '600',
                  }}
                >
                  Upload File
                </Typography>
              </Box>
            </label>
            <input
              type="file"
              name="qImage"
              id="getFile2"
              style={{ display: 'none' }}
              onChange={(event) => {
                const imgUrl = URL.createObjectURL(event.target.files[0]);
                setImage(imgUrl);
                questionMemo.current[counter - 1]['media'] = imgUrl;
                close();
              }}
            />
          </Box>
          <Divider
            children={<Typography children="or" />}
            sx={{ mt: 2, mb: 2 }}
          />

          <ReactGiphySearchbox
            apiKey="XxX3x09HDBNVWLAGVGLndWDiXNmw42gO"
            onSelect={(item) => {
              setImage(item.images.fixed_width.url);
              questionMemo.current[counter - 1]['media'] =
                item.images.fixed_width.url;

              close();
            }}
            gifListHeight="500px"
            masonryConfig={[
              { columns: 3, imageWidth: 140, gutter: 5 },
              { mq: '700px', columns: 4, imageWidth: 140, gutter: 5 },
            ]}
          />
        </Box>
      </Dialogform>
    </>
  );
}

export default Image_GIF;
