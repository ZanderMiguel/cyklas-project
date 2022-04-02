import React from 'react';
import Dialogform from '../../components/Dialogform';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box, Typography, Divider } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import ReactGiphySearchbox from 'react-giphy-searchbox';

function Image_GIF({ open, close, maxWidth, setImage,questionMemo,counter }) {
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

          <label htmlFor="getFile2">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 'auto 10px', color: '#067FFF'}}><UploadIcon />
            <h4>Upload Image</h4></div>
          </label>
          <input
            type="file"
            name="answer2"
            id="getFile2"
            style={{ display: 'none' }}
            onChange={(event) => {
              const imgUrl = URL.createObjectURL(event.target.files[0])
              setImage(imgUrl);
              questionMemo.current[counter - 1]['media'] = imgUrl
              close()
            }}
          />

        </Box>
        <Divider
          children={<Typography children="or" />}
          sx={{ mt: 2, mb: 2 }}
        />

        <ReactGiphySearchbox
          apiKey="XxX3x09HDBNVWLAGVGLndWDiXNmw42gO"
          onSelect={(item) => {setImage(item.images.fixed_width.url)
            questionMemo.current[counter - 1]['media'] = item.images.fixed_width.url
            console.log(questionMemo.current)
            close()}}
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
